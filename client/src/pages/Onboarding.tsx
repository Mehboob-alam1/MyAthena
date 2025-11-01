import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Onboarding() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [primaryStruggle, setPrimaryStruggle] = useState<"self_worth" | "anxiety" | "career" | "relationships" | "purpose" | "trauma" | "other">("self_worth");

  const setGoalMutation = trpc.goals.set.useMutation({
    onSuccess: () => {
      setLocation("/oracle");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryGoal.trim()) {
      alert("Please enter your primary goal");
      return;
    }
    await setGoalMutation.mutateAsync({ primaryGoal, primaryStruggle });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Please sign in to complete your onboarding.
            </p>
            <a href={getLoginUrl()}>
              <Button className="w-full">Sign In</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl">Welcome to MyAthena.life</CardTitle>
          <CardDescription>
            Let's personalize your coaching experience. This will help Athena provide guidance tailored to your unique journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="primaryGoal">What is your primary goal right now?</Label>
              <Textarea
                id="primaryGoal"
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                placeholder="Example: I want to build unshakeable self-confidence and overcome my fear of public speaking..."
                rows={4}
                required
              />
              <p className="text-xs text-muted-foreground">
                Be specific. The more detail you provide, the better Athena can guide you.
              </p>
            </div>

            <div className="space-y-3">
              <Label>What is your primary struggle or challenge?</Label>
              <RadioGroup value={primaryStruggle} onValueChange={(value: any) => setPrimaryStruggle(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="self_worth" id="self_worth" />
                  <Label htmlFor="self_worth" className="font-normal cursor-pointer">
                    Self-Worth / Self-Esteem
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="anxiety" id="anxiety" />
                  <Label htmlFor="anxiety" className="font-normal cursor-pointer">
                    Anxiety / Worry / Stress
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="career" id="career" />
                  <Label htmlFor="career" className="font-normal cursor-pointer">
                    Career / Professional Growth
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="relationships" id="relationships" />
                  <Label htmlFor="relationships" className="font-normal cursor-pointer">
                    Relationships / Connection
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="purpose" id="purpose" />
                  <Label htmlFor="purpose" className="font-normal cursor-pointer">
                    Purpose / Meaning / Direction
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="trauma" id="trauma" />
                  <Label htmlFor="trauma" className="font-normal cursor-pointer">
                    Past Trauma / Emotional Healing
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="font-normal cursor-pointer">
                    Other
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" disabled={setGoalMutation.isPending}>
              {setGoalMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Setting Up...
                </>
              ) : (
                "Begin My Journey"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
