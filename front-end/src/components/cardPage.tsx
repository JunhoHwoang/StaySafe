import Header from "./header";
import { useLocation } from "react-router-dom";
import { Progress } from "./ui/progress";
import Alert from "@mui/material/Alert";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import TypingAnimation from "./ui/typing-animation";

const CardPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const datetime = queryParams.get("datetime");
  const overview = queryParams.get("title");
  const description = queryParams.get("description");
  const content = queryParams.get("overview");
  const score = queryParams.get("score");

  return (
    <div className="flex flex-col w-full h-screen bg-background text-foreground">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <Card className="w-full">
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle className="text-3xl mb-2">{overview}</CardTitle>
              <p className="text-sm text-muted-foreground">ID: {id}</p>
              <p className="text-sm text-muted-foreground">{datetime}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold mb-2">Score: {score}</p>
              <Progress value={Number(score) || 0} className="w-64" />
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
                  More Info:
                </h3>
                <p className="text-base text-foreground">{description}</p>
              </Alert>
            </div>
            <Alert severity="success" variant="outlined">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Solution:
              </h3>
              <TypingAnimation
                className="text-base text-foreground"
                text={content}
                duration={50}
              />
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardPage;
