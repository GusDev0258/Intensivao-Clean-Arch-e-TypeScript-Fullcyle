import { Route, RouteProps } from "../route.entity";

describe("route entity tests", () =>{
  it("should be able to create a route with empty points", () => {
    const routeProps: RouteProps = {
      title: "my route with empty points",
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
    };
    const route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps, points: [],
    });
  });
  it("should be able to create a route with points", () => {
    const routeProps: RouteProps = {
      title: "my route with points",
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
      points: [
        { lat: 12, lng: 12 },
        { lat: 12, lng: 12 },
      ],
    };
    const route = new Route(routeProps);
    expect(route.props).toStrictEqual(routeProps);
  });
  it("should be able to update title", () => {
    const routeProps: RouteProps = {
      title: "my route with points",
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
      points: [
        { lat: 12, lng: 12 },
        { lat: 12, lng: 12 },
      ],
    };
    const route = new Route(routeProps);
    route.updateTitle("new title");
    expect(route.title).toBe("new title");
  });
});