import Header from "./header";
import { useLocation } from "react-router-dom";
import { Progress } from "./ui/progress";
import Alert from "@mui/material/Alert";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TypingAnimation from "./ui/typing-animation";
import { FadeIn } from "./ui/FadeInComp";

const CardPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const datetime = queryParams.get("datetime");
  const overview = queryParams.get("overview");
  const description = queryParams.get("description");
  const solution = queryParams.get("solution");
  const lesson = queryParams.get("lesson");
  const prevention = queryParams.get("prevention");
  const severityScore = queryParams.get("severityScore");

  return (
    <div className="flex flex-col w-full h-screen bg-background text-foreground">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <FadeIn>
        <Card className="w-full">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <CardTitle className="text-3xl mb-2">{overview}</CardTitle>
              <p className="text-sm text-muted-foreground">ID: {id}</p>
              <p className="text-sm text-muted-foreground">{datetime}</p>
            </div>
            <div className="flex flex-col items-center mt-4 sm:mt-0">
              <p className="text-2xl font-bold mb-2">Score: {severityScore}</p>
              <Progress
                value={Number(severityScore) || 0}
                className="w-full sm:w-64 max-w-[16rem]"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Alert severity="info" variant="outlined">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Description:
                </h3>
                <p className="text-base text-foreground">{description}</p>
              </Alert>
              <Alert severity="info" variant="outlined">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Lessons and Preventions:
                </h3>
                <ul className="list-disc">
                  <li className="text-base text-foreground">
                    {lesson}
                  </li>
                  <li className="text-base text-foreground">
                    {prevention}
                  </li>
                </ul>
              </Alert>
            </div>
            <Alert severity="success" variant="outlined">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Solution:
              </h3>
              <TypingAnimation
                className="text-base text-foreground"
                text={solution}
                duration={20}
              />
            </Alert>
          </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
};

export default CardPage;
