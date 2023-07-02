import { Coordinates, Route, RouteProps } from "../src/domain/entities/route.entity";

describe("route entity tests", () => {
  it("should be able to create a route with empty points", () => {
    const routeProps: RouteProps = {
      title: "my route with empty points",
      startPosition: { lat: 15, lng: 15 },
      endPosition: { lat: 20, lng: 20 },
    };
    const route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
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

  it("should be able to update start positions", () => {
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
    const newStartPosition: Coordinates = {
      lat: 30,
      lng: 30,
    };
    route.updateStartPosition(newStartPosition);
    expect(route.startPosition).toBe(newStartPosition);
  });

  it("should be able to update end poisition", () => {
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
    const newEndPosition: Coordinates = { lat: 50, lng: 50 };

    route.updateEndPosition(newEndPosition);
    expect(route.endPosition).toBe(newEndPosition);
  });

  it("should be able to update route positions", () => {
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
    const newStartPosition: Coordinates = { lat: 50, lng: 50 };
    const newEndPosition: Coordinates = { lat: 60, lng: 60 };

    route.updatePositions({ startPosition: newStartPosition, endPosition: newEndPosition });
    expect(route.startPosition).toBe(newStartPosition);
    expect(route.endPosition).toBe(newEndPosition);
  });

  it("should be able to update points", () => {
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
    const newPoints: Coordinates[] = [
      { lat: 18, lng: 18 },
      { lat: 31, lng: 25 },
      { lat: 100, lng: 117 },
    ];

    expect(route.points).toHaveLength(2);
    route.updatePoints({ points: newPoints });
    expect(route.points).toBe(newPoints);
    expect(route.points).toHaveLength(3);
  });
});
