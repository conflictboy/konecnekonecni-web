import {NextRequest, NextResponse} from "next/server";
import {fetchData} from "@/utils/Utils";

export async function POST(request: NextRequest) {
    const response: Response = await fetchData('/api/contact-form', {
        method: 'POST',
        body: await request.text()
    });

    return NextResponse.json(await response.json(), {status: response.status});
}