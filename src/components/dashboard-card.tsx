import { Badge } from "./ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

interface DashboardCardProps {
  name: string;
  description: string;
  tags: string[];
}

export function DashboardCard({ name, description, tags }: DashboardCardProps) {
  return (
    <Card className="flex flex-col shadow-none">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>
          {description.length > 40
            ? `${description.substring(0, 40)}...`
            : description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
