import Card from "../../components/ui/Card";
import ToolLayout from "../../components/ToolLayout";
import MultiFileUpload from "../../components/MultiFileUpload";

export default function MergePdfPage() {
  return (
    <ToolLayout
      title="Merge PDF"
      description="Combine multiple PDF files into one document."
    >
      <Card>
        <MultiFileUpload />
      </Card>
    </ToolLayout>
  );
}