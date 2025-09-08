export declare class TrssBanner {
  /**
   * This sets the color scheme for the alert.
   */
  appearance: string;
  /**
   * The text for the headline of the alert.
   */
  header: string;
  /**
   * @slot header - Header content for the alert.
   * @slot description - Text content for alert.
   */
  private getAppearance;
  render(): any;
}
