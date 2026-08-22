/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('@systemise/ui/tailwind.config.cjs');
const path = require('path');

module.exports = {
  presets: [baseConfig],
  content: [
    './app/**/*.{ts,tsx}',
    `${path.join(require.resolve('@systemise/ui'), '..')}/components/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@systemise/ui'), '..')}/icons/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@systemise/ui'), '..')}/lib/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@systemise/ui'), '..')}/primitives/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@systemise/email'), '..')}/templates/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@systemise/email'), '..')}/template-components/**/*.{ts,tsx}`,
    `${path.join(require.resolve('@systemise/email'), '..')}/providers/**/*.{ts,tsx}`,
  ],
};
