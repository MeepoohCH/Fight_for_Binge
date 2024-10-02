export const DBConfig = {
  name: "record",
  version: 1,
  objectStoresMeta: [
    {
      store: "profile",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "nickname", keypath: "nickname", options: { unique: false } }
      ]
    },
    {
      store: "monitoring",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "day", keypath: "day", options: { unique: false } },
        { name: "time", keypath: "time", options: { unique: false } },
        { name: "food", keypath: "food", options: { unique: false } },
        { name: "place", keypath: "place", options: { unique: false } },
        { name: "binge", keypath: "binge", options: { unique: false } },
        { name: "vomit", keypath: "vomit", options: { unique: false } },
        { name: "comment", keypath: "comment", options: { unique: false } }
      ]
    },
    {
      store: "summary_sheet",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        {
          name: "change_days",
          keypath: "change_days",
          options: { unique: false }
        },
        { name: "weight", keypath: "weight", options: { unique: false } },
        { name: "events", keypath: "events", options: { unique: false } }
      ]
    },
    {
      store: "problem_solving",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "solving", keypath: "solving", options: { unique: false } },
        { name: "review", keypath: "review", options: { unique: false } }
      ]
    },
    {
      store: "body_record",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "time", keypath: "time", options: { unique: false } },
        { name: "checking", keypath: "checking", options: { unique: false } },
        { name: "place", keypath: "place", options: { unique: false } },
        { name: "comment", keypath: "comment", options: { unique: false } }
      ]
    },
    {
      store: "progress",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "part", keypath: "part", options: { unique: false } },
        { name: "chapter", keypath: "chapter", options: { unique: false } },
        { name: "progress", keypath: "progress", options: { unique: false } },
        { name: "total", keypath: "total", options: { unique: false } }
      ]
    }
  ]
};
