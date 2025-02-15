import {
    p as e,
    b as n
} from "./p-1c8f82fc.js";
export {
    s as setNonce
}
from "./p-1c8f82fc.js";
import {
    g as t
} from "./p-368db243.js";
import "./p-52fa0058.js";
const o = () => {
    const n =
        import.meta.url;
    const t = {};
    if (n !== "") {
        t.resourcesUrl = new URL(".", n).href
    }
    return e(t)
};
o().then((e => {
    t();
    return n([
        ["p-704d3056", [
            [2, "phn-country-recommender", {
                    locale: [1],
                    content: [16],
                    flagURL: [32]
                },
                [
                    [1, "animationend", "handleAnimationEnd"]
                ], {
                    locale: ["localeWatcher"]
                }
            ]
        ]],
        ["p-22d4cb29", [
            [2, "phn-single-drawer", {
                    breakpoint: [2],
                    locale: [1],
                    usingKeyboard: [4, "using-keyboard"],
                    receivedContent: [4, "received-content"]
                },
                [
                    [0, "keydown", "handleKeyDown"]
                ]
            ]
        ]],
        ["p-715b5e41", [
            [2, "phn-double-drawer", {
                    locale: [1],
                    receivedContent: [4, "received-content"]
                },
                [
                    [0, "keydown", "handleKeyDown"]
                ]
            ]
        ]],
        ["p-febef8af", [
            [6, "phn-level-0-icons", {
                locale: [1],
                theme: [1],
                mode: [1],
                app: [1],
                breakpoint: [2],
                isLoading: [4, "is-loading"],
                isNavigationLoaded: [4, "is-navigation-loaded"]
            }]
        ]],
        ["p-53ba9184", [
            [6, "contextual-drawer", {
                    isDrawerOpened: [32]
                },
                [
                    [8, "phnCloseContextualDrawer", "closeContextualDrawer"],
                    [8, "phnOpenContextualDrawer", "openContextualDrawer"]
                ]
            ]
        ]],
        ["p-2870cf12", [
            [2, "phn-backdrop", null, [
                [1, "click", "handleClick"]
            ]]
        ]],
        ["p-1a2085a0", [
            [2, "phn-logo", {
                size: [1],
                locale: [1],
                app: [1],
                theme: [1],
                mode: [1],
                breakpoint: [2]
            }]
        ]],
        ["p-845a216d", [
            [2, "phn-drawer-header", {
                backButtonText: [1, "back-button-text"],
                backButtonAnalyticsId: [1, "back-button-analytics-id"],
                showBackButton: [4, "show-back-button"],
                route: [1],
                breakpoint: [2],
                receivedContent: [4, "received-content"],
                locale: [1],
                showSkeleton: [32]
            }]
        ]],
        ["p-cacd2c32", [
            [6, "phn-side-drawer-item", {
                text: [1],
                analyticsId: [1, "analytics-id"],
                subtext: [1],
                elementId: [1, "element-id"],
                link: [1],
                iconRight: [1, "icon-right"],
                datalayerEventAction: [1, "datalayer-event-action"],
                customDatalayerProperties: [16],
                isActive: [4, "is-active"],
                hasDoubleDrawerAnimationFinished: [4, "has-double-drawer-animation-finished"],
                renderSignatures: [4, "render-signatures"]
            }]
        ]],
        ["p-4b034c45", [
            [2, "phn-side-drawer", {
                activeRoutingKey: [1, "active-routing-key"],
                locale: [1]
            }]
        ]],
        ["p-c9aa926d", [
            [2, "phn-burger-button", {
                hideLabel: [4, "hide-label"],
                alignLabel: [1, "align-label"],
                isLoading: [4, "is-loading"],
                theme: [1],
                mode: [1]
            }],
            [2, "phn-my-porsche-icon-button", {
                mode: [1],
                theme: [1],
                isMyPorscheHoveredOn: [32]
            }]
        ]],
        ["p-8908cc42", [
            [6, "phn-menu-item", {
                text: [1],
                analyticsId: [1, "analytics-id"],
                subtext: [1],
                fontWeight: [1, "font-weight"],
                elementId: [1, "element-id"],
                size: [1],
                iconLeft: [1, "icon-left"],
                iconRight: [1, "icon-right"],
                link: [1],
                isLoading: [4, "is-loading"],
                datalayerEventAction: [1, "datalayer-event-action"],
                customDatalayerProperties: [16],
                target: [1],
                variant: [1],
                isModels: [4, "is-models"]
            }]
        ]],
        ["p-b1340976", [
            [2, "phn-heading", {
                text: [1],
                subtext: [1]
            }],
            [2, "phn-signature-heading", {
                text: [1],
                subtext: [1]
            }],
            [2, "phn-back-button", {
                text: [1],
                analyticsId: [1, "analytics-id"]
            }]
        ]],
        ["p-2e723018", [
            [2, "phn-dealer-search-results", {
                showOverlay: [4, "show-overlay"],
                locale: [1],
                breakpoint: [2]
            }],
            [2, "phn-dealer-search-form-geolocation", {
                    locale: [1],
                    predictions: [32],
                    errorMessage: [32],
                    formErrorMessage: [32],
                    isLoading: [32],
                    showGeolocationButton: [32],
                    animateResults: [32],
                    searchTerm: [32],
                    showSkeleton: [32]
                },
                [
                    [0, "autoCompleteLoaded", "loadedAutoCompleteListener"]
                ]
            ],
            [2, "phn-dealer-search-by-number-of-dealers", {
                locale: [1],
                isLoading: [32],
                formErrorMessage: [32]
            }],
            [2, "phn-dealer-search-form-dropdown", {
                    locale: [1],
                    breakpoint: [2],
                    isLoading: [32],
                    errorMessage: [32],
                    dealersOfRegion: [32],
                    cities: [32],
                    selectedProvince: [32],
                    selectedCity: [32],
                    showSkeleton: [32]
                },
                [
                    [0, "removeSkeletonOnDealerSearchForm", "loadedAutoCompleteListener"]
                ]
            ],
            [2, "phn-myporsche-login", {
                login: [16],
                more: [16],
                signup: [16],
                signupText: [1, "signup-text"]
            }],
            [2, "phn-dealer-details-drawer", {
                dealerId: [1, "dealer-id"],
                locale: [1],
                breakpoint: [2],
                errorMessage: [32],
                showSkeleton: [32]
            }],
            [2, "phn-autocomplete-search-field", {
                    placeholder: [1],
                    predictions: [16],
                    initialValue: [1, "initial-value"],
                    errorState: [1, "error-state"],
                    errorMessage: [1, "error-message"],
                    showPredictions: [32],
                    highlightedPredictionIndex: [32],
                    searchterm: [32]
                },
                [
                    [9, "click", "clickListener"],
                    [0, "keydown", "keydownListener"]
                ], {
                    showPredictions: ["watchShowPredictions"],
                    initialValue: ["watchInitialValue"]
                }
            ],
            [6, "phn-menu-item-card", {
                    text: [1],
                    analyticsId: [1, "analytics-id"],
                    subtext: [1],
                    elementId: [1, "element-id"],
                    link: [1],
                    datalayerEventAction: [1, "datalayer-event-action"],
                    customDatalayerProperties: [16],
                    target: [1],
                    iconLeft: [1, "icon-left"]
                },
                [
                    [0, "keydown", "handleKeyDown"]
                ]
            ]
        ]],
        ["p-d443f202", [
            [2, "phn-router", {
                activeRoutingKey: [1, "active-routing-key"],
                breakpoint: [2],
                locale: [1],
                receivedContent: [4, "received-content"]
            }],
            [2, "phn-dealer-search-form", {
                    dealer: [16],
                    locale: [1],
                    showHeadline: [4, "show-headline"],
                    breakpoint: [2],
                    showOverlay: [32],
                    formErrorMessage: [32],
                    showSkeleton: [32],
                    animateResults: [32]
                },
                [
                    [0, "predictionsToggle", "toggleOverlay"],
                    [0, "removeSkeletonOnDealerSearchForm", "loadedAutoCompleteListener"]
                ]
            ],
            [2, "phn-myporsche-drawer", {
                showSkeleton: [32]
            }],
            [2, "phn-level-1", {
                locale: [1],
                breakpoint: [2]
            }],
            [2, "phn-menu", {
                item: [16],
                showHeadline: [4, "show-headline"],
                receivedContent: [4, "received-content"],
                showSkeleton: [32]
            }],
            [2, "phn-models", {
                breakpoint: [2],
                showHeadline: [4, "show-headline"],
                showSkeleton: [32]
            }],
            [2, "phn-car-body-types-drawer", {
                series: [16],
                breakpoint: [2],
                seriesLoaded: [32],
                showSkeleton: [32]
            }, null, {
                series: ["seriesWatcher"]
            }]
        ]],
        ["p-6cf53c4d", [
            [1, "phn-header", {
                    locale: [1],
                    env: [1],
                    clientId: [1, "client-id"],
                    pageName: [1, "page-name"],
                    theme: [1],
                    mode: [1],
                    limitedWidth: [1, "limited-width"],
                    app: [1],
                    initialRoutingPath: [1, "initial-routing-path"],
                    displayLogoOnly: [4, "display-logo-only"],
                    numberOfShoppingItems: [2, "number-of-shopping-items"],
                    wishlistItemsNumber: [2, "wishlist-items-number"],
                    shopInformation: [1, "shop-information"],
                    loadingContent: [32],
                    receivedContent: [32],
                    breakpoint: [32]
                },
                [
                    [9, "resize", "resizeHandler"],
                    [9, "message", "newAuthMessageReceived"],
                    [0, "loginEvent", "handleLogin"],
                    [0, "logoutEvent", "handleLogout"],
                    [9, "ucReady", "handleUserCentricsReady"],
                    [9, "ucInit", "handleUserCentricsInitalization"],
                    [0, "navigationLoaded", "navigationLoadedHandler"]
                ], {
                    locale: ["localeWatchHandler"],
                    pageName: ["pageNameWatchHandler"],
                    env: ["newEnvReceived"],
                    app: ["appWatcher"],
                    breakpoint: ["breakpointWatcher"],
                    shopInformation: ["watchShopVariable"],
                    initialRoutingPath: ["initialRoutingPathWatcher"]
                }
            ],
            [6, "phn-wrapper", {
                locale: [1],
                breakpoint: [2],
                loadingContent: [4, "loading-content"],
                receivedContent: [4, "received-content"],
                theme: [1],
                mode: [1],
                app: [1],
                displayLogoOnly: [4, "display-logo-only"],
                limitedWidth: [4, "limited-width"],
                showCountryRecommender: [32],
                countryRecommenderClosed: [32]
            }],
            [6, "phn-level-0", {
                    locale: [1],
                    breakpoint: [2],
                    loadingContent: [4, "loading-content"],
                    receivedContent: [4, "received-content"],
                    theme: [1],
                    mode: [1],
                    app: [1],
                    displayLogoOnly: [4, "display-logo-only"],
                    limitedWidth: [4, "limited-width"],
                    usingKeyboard: [32],
                    scrolledPastHeader: [32],
                    isNavigationLoaded: [32],
                    isLoading: [32],
                    isMyPorscheHoveredOn: [32]
                },
                [
                    [0, "logoLoaded", "logoLoadedHandler"],
                    [9, "scroll", "scrollHandler"],
                    [9, "keydown", "handleKeyDown"],
                    [1, "click", "handleClick"],
                    [0, "openDrawer", "handleOpenDrawer"]
                ], {
                    loadingContent: ["loadingContentWatcher"],
                    breakpoint: ["breakpointWatcher"],
                    receivedContent: ["receivedContentWatcher"]
                }
            ]
        ]]
    ], e)
}));
//# sourceMappingURL=porsche-navigation.esm.js.map