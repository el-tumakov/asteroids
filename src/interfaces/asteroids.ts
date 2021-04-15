export interface IAsteroid {
  absolute_magnitude_h: number;
  close_approach_data: Array<{
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    miss_distance: {
      astronomical: string;
      kilometers: string;
      lunar: string;
      miles: string;
    };
    orbiting_body: string;
    relative_velocity: {
      kilometers_per_hour: string;
      kilometers_per_second: string;
      miles_per_hour: string;
    };
  }>;
  estimated_diameter: {
    feet: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    kilometers: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    meters: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    miles: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
  };
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: {
    self: string;
  };
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
}

export interface INearEarthObjects {
  [key: string]: Array<IAsteroid>;
}

export interface ILinks {
  next: string;
  prev: string;
  self: string;
}

export interface IAsteroidFeed {
  element_count: number;
  links: ILinks;
  near_earth_objects: INearEarthObjects;
}

export interface IAdaptedAsteroid {
  absoluteMagnitudeH: number;
  closeApproachData: Array<{
    closeApproachDate: string;
    closeApproachDateFull: string;
    epochDateCloseApproach: number;
    missDistance: {
      astronomical: string;
      kilometers: string;
      lunar: string;
      miles: string;
    };
    orbitingBody: string;
    relativeVelocity: {
      kilometersPerHour: string;
      kilometersPerSecond: string;
      milesPerHour: string;
    };
  }>;
  estimatedDiameter: {
    feet: {
      estimatedDiameterMax: number;
      estimatedDiameterMin: number;
    };
    kilometers: {
      estimatedDiameterMax: number;
      estimatedDiameterMin: number;
    };
    meters: {
      estimatedDiameterMax: number;
      estimatedDiameterMin: number;
    };
    miles: {
      estimatedDiameterMax: number;
      estimatedDiameterMin: number;
    };
  };
  id: string;
  isPotentiallyHazardousAsteroid: boolean;
  isSentryObject: boolean;
  links: {
    self: string;
  };
  name: string;
  nasaJplUrl: string;
  neoReferenceId: string;
}

export interface IAdaptedNearEarthObjects {
  [key: string]: Array<IAdaptedAsteroid>;
}

export interface IAdaptedAsteroidFeed {
  elementCount: number;
  links: ILinks;
  nearEarthObjects: INearEarthObjects;
}
