
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Achievement {
  title: string;
  description: string;
  metricImage?: string;
}

interface ProjectAchievementsProps {
  achievements: Achievement[];
}

const ProjectAchievements: React.FC<ProjectAchievementsProps> = ({ achievements }) => {
  const [openAchievementIndex, setOpenAchievementIndex] = useState<number | null>(null);

  const toggleAchievement = (index: number) => {
    setOpenAchievementIndex(openAchievementIndex === index ? null : index);
  };

  if (!achievements.length) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Key Achievements</h3>
      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <div key={index}>
            {achievement.metricImage ? (
              <Dialog>
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <Collapsible>
                    <div className="flex justify-between items-center w-full p-4">
                      <CollapsibleTrigger 
                        className="flex justify-between items-center w-full text-left font-medium"
                        onClick={() => toggleAchievement(index)}
                      >
                        {achievement.title}
                        <ChevronDown 
                          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                            openAchievementIndex === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </CollapsibleTrigger>
                      <DialogTrigger>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2 text-gray-500 hover:text-gray-900"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                    </div>
                    <CollapsibleContent className="px-4 pb-4 text-gray-600">
                      {achievement.description}
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
                
                <DialogContent className="max-w-3xl">
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-4">{achievement.title} - Metrics</h3>
                    <img 
                      src={achievement.metricImage} 
                      alt={`${achievement.title} metrics`} 
                      className="w-full rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="flex justify-between items-center w-full p-4 text-left font-medium"
                    onClick={() => toggleAchievement(index)}
                  >
                    {achievement.title}
                    <ChevronDown 
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        openAchievementIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4 text-gray-600">
                    {achievement.description}
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAchievements;
