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

  

  private set title(title: string) {
    this.props.title = title;
  }
}



const route = new Route({
  title: "minha rota",
  startPosition: { lat: 15, lng: 15 },
  endPosition: { lat: 20, lng: 20 },
  points: [
    { lat: 12, lng: 12 },
    { lat: 12, lng: 12 },
    { lat: 12, lng: 12 }, 
    { lat: 12, lng: 12 },
  ]
});
