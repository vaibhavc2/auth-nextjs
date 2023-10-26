import { getConfig, getSanitizedConfig } from "@/helpers";

const config = getConfig();

export const sanitizedConfig = getSanitizedConfig(config);
