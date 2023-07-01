export type Coordinates = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points?: Coordinates[];
};
export class Route {
  public props: Required<RouteProps>;

  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  updateTitle(title: string) {
    this.title = title;
  }

  updateStartPosition(startPosition: Coordinates) {
    this.startPosition = startPosition;
  }

  updateEndPosition(endPosition: Coordinates) {
    this.endPosition = endPosition;
  }

  public get title(): string{
    return this.props.title;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  private set startPosition(startPosition: Coordinates) {
    this.props.startPosition = startPosition;
  }

  private set endPosition(endPosition: Coordinates) {
    this.props.endPosition = endPosition;
  }

}
