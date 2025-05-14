import {Card, CardContent} from "@components/card";
import {ScrollArea} from "@components/scroll-area";
import {useGetTopShortCodes} from "@hooks/useGetTopShortCodes.tsx";
import {Loader} from "@components/loader";

export const Top100 = () => {
    const {topUrls, loading, error} = useGetTopShortCodes();

    return (
        <div className="flex-1 bg-gradient-to-b from-indigo-50 to-white py-10 px-6">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Top 100 Most Accessed URLs</h2>
            <Card>
                <CardContent className="p-4">
                    <ScrollArea className="h-[600px] border rounded-md">
                        <div className="space-y-3 p-2">
                            {topUrls && topUrls.map((shortCode, idx) => (
                                <div key={idx} className="flex justify-between items-center p-2 bg-white shadow-sm rounded">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-800 truncate w-64">{shortCode.full_url}</span>
                                        <span className="text-sm text-gray-500">shortcode: {shortCode.shortcode}</span>
                                    </div>
                                    <span className="text-sm text-indigo-700">Accessed {shortCode.click_count} times</span>
                                </div>
                            ))}

                            {loading && <Loader/>}

                            {error && (
                                <div className="text-red-500 text-center">
                                    <p>{error}</p>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}
