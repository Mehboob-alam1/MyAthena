-- Progress Tracking Schema for MyAthena.life
-- Tracks user progress across all four pillars

-- User Progress Overview
CREATE TABLE IF NOT EXISTS user_progress (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  
  -- Overall journey metrics
  journey_start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_sessions_completed INT DEFAULT 0,
  total_days_active INT DEFAULT 0,
  current_streak INT DEFAULT 0,
  longest_streak INT DEFAULT 0,
  last_active_date TIMESTAMP,
  
  -- Pillar completion status
  oracle_sessions INT DEFAULT 0,
  crucible_sessions_completed JSON, -- Array of session IDs
  mirror_sessions_completed JSON, -- Array of session IDs
  ascent_goals_created INT DEFAULT 0,
  ascent_goals_completed INT DEFAULT 0,
  
  -- Engagement metrics
  total_chat_messages INT DEFAULT 0,
  total_reflections INT DEFAULT 0,
  total_patterns_detected INT DEFAULT 0,
  total_micro_tasks_completed INT DEFAULT 0,
  
  -- Transformation metrics
  self_reported_transformation_level INT DEFAULT 0, -- 1-10 scale
  breakthrough_moments JSON, -- Array of {date, description, pillar}
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_progress (user_id)
);

-- Crucible Session Completions
CREATE TABLE IF NOT EXISTS crucible_completions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  session_id INT NOT NULL, -- 1-4
  session_title VARCHAR(255) NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  time_spent_minutes INT,
  reflection_notes TEXT,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_session (user_id, session_id)
);

-- Mirror Session Completions
CREATE TABLE IF NOT EXISTS mirror_completions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  session_id INT NOT NULL, -- 1-4
  session_title VARCHAR(255) NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  time_spent_minutes INT,
  key_insights TEXT,
  patterns_discovered JSON, -- Array of pattern descriptions
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_session (user_id, session_id)
);

-- Ascent Goals
CREATE TABLE IF NOT EXISTS ascent_goals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(500) NOT NULL,
  category VARCHAR(100), -- Career, Health, Relationships, etc.
  description TEXT,
  why TEXT, -- Why this goal matters
  target_date DATE,
  status ENUM('active', 'completed', 'paused', 'abandoned') DEFAULT 'active',
  progress_percentage INT DEFAULT 0,
  
  -- Neuroscience integration
  vision_statement TEXT, -- Present-tense, emotionally-charged
  emotional_charge INT DEFAULT 0, -- 1-10 scale
  quantum_field_practice_count INT DEFAULT 0,
  pattern_interruptions_count INT DEFAULT 0,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  completed_at TIMESTAMP NULL,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_status (user_id, status)
);

-- Ascent Micro-Tasks
CREATE TABLE IF NOT EXISTS ascent_tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  goal_id INT NOT NULL,
  user_id INT NOT NULL,
  task_text VARCHAR(500) NOT NULL,
  due_date DATE,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP NULL,
  estimated_minutes INT DEFAULT 15,
  
  -- Neuroplasticity tracking
  attention_score INT, -- 1-10, how focused were you?
  reward_feeling VARCHAR(255), -- What did you feel after completing?
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (goal_id) REFERENCES ascent_goals(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_due (user_id, due_date, completed)
);

-- Daily Check-ins (for streak tracking)
CREATE TABLE IF NOT EXISTS daily_checkins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  checkin_date DATE NOT NULL,
  
  -- What they did today
  oracle_used BOOLEAN DEFAULT FALSE,
  crucible_practiced BOOLEAN DEFAULT FALSE,
  mirror_reflected BOOLEAN DEFAULT FALSE,
  ascent_action_taken BOOLEAN DEFAULT FALSE,
  
  -- Quantum field practice
  quantum_practice_completed BOOLEAN DEFAULT FALSE,
  heart_coherence_minutes INT DEFAULT 0,
  
  -- Self-assessment
  energy_level INT, -- 1-10
  emotional_state VARCHAR(100),
  gratitude_note TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_date (user_id, checkin_date)
);

-- Breakthrough Moments
CREATE TABLE IF NOT EXISTS breakthrough_moments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  pillar ENUM('oracle', 'crucible', 'mirror', 'ascent') NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  emotional_impact INT, -- 1-10 scale
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_pillar (user_id, pillar)
);

-- Indexes for performance
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_streak ON user_progress(current_streak DESC);
CREATE INDEX idx_checkin_date ON daily_checkins(checkin_date DESC);
CREATE INDEX idx_goals_active ON ascent_goals(user_id, status, target_date);
