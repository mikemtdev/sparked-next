import { T_RECORD } from 'types';
import { dbCollections } from '../lib/db/collections';

export const p_fetchTopicsWithMetaData = ({
  query = {},
  skip = 0,
  limit = 1000,
  project = {},
}: {
  query?: object;
  limit?: number;
  skip?: number;
  project: T_RECORD;
}) => [
  {
    $match: query,
  },

  {
    $lookup: {
      from: dbCollections.users.name,
      localField: 'created_by_id',
      foreignField: '_id',
      as: 'user',
    },
  },
  {
    $unwind: '$user',
  },
  {
    $lookup: {
      from: dbCollections.schools.name,
      localField: 'school_id',
      foreignField: '_id',
      as: 'school',
    },
  },
  {
    $unwind: {
      path: '$school',
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $lookup: {
      from: dbCollections.programs.name,
      localField: 'program_id',
      foreignField: '_id',
      as: 'program',
    },
  },
  {
    $unwind: {
      path: '$program',
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $lookup: {
      from: dbCollections.courses.name,
      localField: 'course_id',
      foreignField: '_id',
      as: 'course',
    },
  },
  {
    $unwind: {
      path: '$course',
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $lookup: {
      from: dbCollections.units.name,
      localField: 'unit_id',
      foreignField: '_id',
      as: 'unit',
    },
  },
  {
    $unwind: {
      path: '$unit',
      preserveNullAndEmptyArrays: true,
    },
  },

  {
    $project: {
      updated_at: 1,
      name: 1,
      description: 1,
      created_at: 1,
      _id: 1,
      'user._id': 1,
      'user.name': 1,
      'user.email': 1,
      'course._id': 1,
      'course.name': 1,
      'unit.name': 1,
      'unit._id': 1,
      ...project,
    },
  },
  {
    $skip: skip,
  },
  {
    $limit: limit,
  },
];
