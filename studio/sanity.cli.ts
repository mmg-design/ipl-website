import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./env";

export default defineCliConfig({
  api: { projectId, dataset },
  /** Hosted at https://inge-performance-lab.sanity.studio */
  studioHost: "inge-performance-lab",
  deployment: { autoUpdates: true },
});
