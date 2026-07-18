import Card from "../../components/ui/Card";
import ToolLayout from "../../components/ToolLayout";
import CompressUpload from "../../components/CompressUpload";

export default function CompressPdfPage() {
  return (
    <ToolLayout
      title="Compress PDF"
      description="Reduce the size of your PDF while maintaining the best possible quality."
    >
      <Card>
        <CompressUpload />
      </Card>
    </ToolLayout>
  );
}