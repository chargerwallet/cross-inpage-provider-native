"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsBridgeNativeInjected_1 = require("./JsBridgeNativeInjected");
const inpage_providers_hub_1 = require("@chargerwallet/inpage-providers-hub");
const cross_inpage_provider_core_1 = require("@chargerwallet/cross-inpage-provider-core");
const bridge = () => new JsBridgeNativeInjected_1.JsBridgeNativeInjected({
    receiveHandler: cross_inpage_provider_core_1.injectedProviderReceiveHandler,
});
(0, cross_inpage_provider_core_1.injectJsBridge)(bridge);
(0, inpage_providers_hub_1.injectWeb3Provider)();
// eslint-disable-next-line no-void
void 0;
