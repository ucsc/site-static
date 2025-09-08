export declare class TrssDataList {
  /**
   * The JSON source for the content list in this component.
   */
  source: string;
  /**
   * Limit the number of items displayed.
   */
  limit: number;
  /**
   * Whether or not to display the teaser text.
   */
  teaser: boolean;
  /**
   * @slot default - Content that appears above the list. We recommend a header and description.
   */
  render(): any;
  listData: {
    items: any[];
  };
  componentWillRender(): Promise<void>;
  private getEncodedText;
}
