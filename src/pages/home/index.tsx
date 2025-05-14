import {Card, CardContent} from "@components/card";
import {Input} from "@components/input";
import {Button} from "@components/button";
import {useCreateShortCode} from "@hooks/useCreateShortCode.ts";



export const Home = () => {
    const {shortCode, url, errors, setUrl, handleSubmit} = useCreateShortCode();

    return (
        <div className="bg-gradient-to-b from-indigo-50 to-white py-10 px-6">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Shorten Your Link</h2>
            <Card>
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <div className="flex flex-col">
                            <Input
                                type="text"
                                placeholder="Paste your URL here..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />

                            {errors.length > 0 && (
                                <div className="text-red-600 font-medium">
                                    {errors.map((error, index) => (
                                        <p key={index} className="text-sm">{error}</p>
                                    ))}
                                </div>
                            )}
                        </div>


                        <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                            Generate Link
                        </Button>
                    </form>

                    {shortCode && (
                        <div className="flex flex-row mt-4 text-green-700 font-medium">
                            ShortCode generated: <p className="underline">{shortCode}</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
