import {
  IAsteroid,
  IAsteroidFeed,
  INearEarthObjects,
  IAdaptedNearEarthObjects,
  IMissDistance,
} from "./interfaces/asteroids";
import {FilterDistanceType} from "./interfaces/filter";

export const adaptAsteroidToClient = (asteroid: IAsteroid) => ({
  absoluteMagnitudeH: asteroid.absolute_magnitude_h,
  closeApproachData: asteroid.close_approach_data.map((closeApproachItem) => ({
    closeApproachDate: closeApproachItem.close_approach_date,
    closeApproachDateFull: closeApproachItem.close_approach_date_full,
    epochDateCloseApproach: closeApproachItem.epoch_date_close_approach,
    missDistance: closeApproachItem.miss_distance,
    orbitingBody: closeApproachItem.orbiting_body,
    relativeVelocity: {
      kilometersPerHour:
        closeApproachItem.relative_velocity.kilometers_per_hour,
      kilometersPerSecond:
        closeApproachItem.relative_velocity.kilometers_per_second,
      milesPerHour: closeApproachItem.relative_velocity.miles_per_hour,
    },
  })),
  estimatedDiameter: {
    feet: {
      estimatedDiameterMax:
        asteroid.estimated_diameter.feet.estimated_diameter_max,
      estimatedDiameterMin:
        asteroid.estimated_diameter.feet.estimated_diameter_min,
    },
    kilometers: {
      estimatedDiameterMax:
        asteroid.estimated_diameter.kilometers.estimated_diameter_max,
      estimatedDiameterMin:
        asteroid.estimated_diameter.kilometers.estimated_diameter_min,
    },
    meters: {
      estimatedDiameterMax:
        asteroid.estimated_diameter.meters.estimated_diameter_max,
      estimatedDiameterMin:
        asteroid.estimated_diameter.meters.estimated_diameter_min,
    },
    miles: {
      estimatedDiameterMax:
        asteroid.estimated_diameter.miles.estimated_diameter_max,
      estimatedDiameterMin:
        asteroid.estimated_diameter.miles.estimated_diameter_min,
    },
  },
  id: asteroid.id,
  isPotentiallyHazardousAsteroid: asteroid.is_potentially_hazardous_asteroid,
  isSentryObject: asteroid.is_sentry_object,
  links: asteroid.links,
  name: asteroid.name,
  nasaJplUrl: asteroid.nasa_jpl_url,
  neoReferenceId: asteroid.neo_reference_id,
});

export const adaptNearEarthObjectsToClient = (
  nearEarthObjects: INearEarthObjects
) => {
  const adaptedNearEarthObjects: IAdaptedNearEarthObjects = {};

  for (let object in nearEarthObjects) {
    adaptedNearEarthObjects[object] = nearEarthObjects[
      object
    ].map((item: IAsteroid) => adaptAsteroidToClient(item));
  }

  return adaptedNearEarthObjects;
};

export const adaptAsteroidFeedToClient = (asteroids: IAsteroidFeed) => ({
  elementCount: asteroids.element_count,
  links: asteroids.links,
  nearEarthObjects: adaptNearEarthObjectsToClient(asteroids.near_earth_objects),
});

export const getDistance = (
  filterDistance: FilterDistanceType,
  missDistance: IMissDistance
) => {
  switch (filterDistance) {
    case FilterDistanceType.KILOMETRES:
      return Math.round(+missDistance.kilometers) + " км";

    case FilterDistanceType.MOONS:
      const distance = Math.round(+missDistance.lunar).toString();

      if (distance[distance.length - 1] === "1") {
        return distance + " луна";
      }

      if (
        distance[distance.length - 1] === "2" ||
        distance[distance.length - 1] === "3"
      ) {
        return distance + " луны";
      }

      return distance + " лун";
  }
};
