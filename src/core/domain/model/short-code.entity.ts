export class ShortCode {
    public id: number;
    public full_url: string;
    public click_count: number;
    public shortcode: string;

    constructor(
        id: number,
        full_url: string,
        click_count: number,
        shortcode: string,
    ) {
        this.id = id;
        this.full_url = full_url;
        this.click_count = click_count;
        this.shortcode = shortcode;
    }
}
