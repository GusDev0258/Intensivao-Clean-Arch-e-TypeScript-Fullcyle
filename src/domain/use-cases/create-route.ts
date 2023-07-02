import { Coordinates, Route } from "../entities/route.entity";
import { RouteRepositoryInterface } from "../repository/route.repository";

export class CreateRouteUseCase {

  constructor(private readonly routeRepository: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepository.insert(route);
    return route.toJSON();
  }
}

type CreateRouteInput = {
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points?: Coordinates[];
}

type CreateRouteOutput = {
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points?: Coordinates[];
}