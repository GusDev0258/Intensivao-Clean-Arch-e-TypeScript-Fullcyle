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

  updatePositions({ startPosition, endPosition }: { startPosition: Coordinates; endPosition: Coordinates; }) {
    this.updateStartPosition(startPosition);
    this.updateEndPosition(endPosition);
  }

  updatePoints({ points }: { points: Coordinates[]; }){
    this.points = points;
  }

  public get title(): string{
    return this.props.title;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  public get startPosition(): Coordinates{
    return this.props.startPosition;
  }

  private set startPosition(startPosition: Coordinates) {
    this.props.startPosition = startPosition;
  }

  public get endPosition(): Coordinates{
    return this.props.endPosition;
  }

  private set endPosition(endPosition: Coordinates) {
    this.props.endPosition = endPosition;
  }

  public get points(): Coordinates[]{
    return this.props.points;
  }

  private set points(points: Coordinates[]) {
    this.props.points = points;
  }

  toJSON() {
    return this.props;
  }
}
