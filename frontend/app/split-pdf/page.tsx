import Card from "../../components/ui/Card";
import ToolLayout from "../../components/ToolLayout";
import SplitUpload from "../../components/SplitUpload";

export default function SplitPdfPage() {
  return (
    <ToolLayout
      title="Split PDF"
      description="Split a PDF into multiple documents by selecting page ranges."
    >
      <Card>
        <SplitUpload />
      </Card>
    </ToolLayout>
  );
}