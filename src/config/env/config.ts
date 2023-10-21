import { getConfig, getSanitizedConfig } from "@/helpers";

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

const EnvVariables = sanitizedConfig;

export default EnvVariables;
