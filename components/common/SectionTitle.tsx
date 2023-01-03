export default function SectionTitle({title}: {title: string}) {
    return (
        <div className="flex items-center mb-6">
            <div className="w-1 bg-amber-500 h-8 mr-4"></div>
            <h1 className="text-2xl">
                {title}
            </h1>
        </div>
    );
}