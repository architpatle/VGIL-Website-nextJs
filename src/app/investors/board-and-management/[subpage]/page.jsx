import BoardManagement from "@/pages/BoardManagement";

export default async function BoardManagementSubpage({ params }) {
    const { subpage } = await params;

    return <BoardManagement subpage={subpage} />;
}