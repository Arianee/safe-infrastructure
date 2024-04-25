"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
    return ({
        about: {
            name: 'safe-client-gateway',
            version: process.env.APPLICATION_VERSION,
            buildNumber: process.env.APPLICATION_BUILD_NUMBER,
        },
        alerts: {
            baseUri: process.env.ALERTS_PROVIDER_API_BASE_URI || 'https://api.tenderly.co',
            signingKey: process.env.ALERTS_PROVIDER_SIGNING_KEY,
            apiKey: process.env.ALERTS_PROVIDER_API_KEY,
            account: process.env.ALERTS_PROVIDER_ACCOUNT,
            project: process.env.ALERTS_PROVIDER_PROJECT,
        },
        applicationPort: process.env.APPLICATION_PORT || '3000',
        auth: {
            token: process.env.AUTH_TOKEN,
            nonceTtlSeconds: parseInt((_a = process.env.AUTH_NONCE_TTL_SECONDS) !== null && _a !== void 0 ? _a : `${5 * 60}`),
        },
        balances: {
            balancesTtlSeconds: parseInt((_b = process.env.BALANCES_TTL_SECONDS) !== null && _b !== void 0 ? _b : `${300}`),
            providers: {
                safe: {
                    prices: {
                        baseUri: process.env.PRICES_PROVIDER_API_BASE_URI ||
                            'https://api.coingecko.com/api/v3',
                        apiKey: process.env.PRICES_PROVIDER_API_KEY,
                        pricesTtlSeconds: parseInt((_c = process.env.PRICES_TTL_SECONDS) !== null && _c !== void 0 ? _c : `${300}`),
                        notFoundPriceTtlSeconds: parseInt((_d = process.env.NOT_FOUND_PRICE_TTL_SECONDS) !== null && _d !== void 0 ? _d : `${72 * 60 * 60}`),
                        chains: {
                            1: { nativeCoin: 'ethereum', chainName: 'ethereum' },
                            10: { nativeCoin: 'ethereum', chainName: 'optimistic-ethereum' },
                            100: { nativeCoin: 'xdai', chainName: 'xdai' },
                            1101: { nativeCoin: 'ethereum', chainName: 'polygon-zkevm' },
                            11155111: { nativeCoin: 'ethereum', chainName: 'ethereum' },
                            1313161554: { nativeCoin: 'ethereum', chainName: 'aurora' },
                            137: { nativeCoin: 'matic-network', chainName: 'polygon-pos' },
                            324: { nativeCoin: 'ethereum', chainName: 'zksync' },
                            42161: { nativeCoin: 'ethereum', chainName: 'arbitrum-one' },
                            42220: { nativeCoin: 'celo', chainName: 'celo' },
                            43114: { nativeCoin: 'avalanche-2', chainName: 'avalanche' },
                            5: { nativeCoin: 'ethereum', chainName: 'ethereum' },
                            56: { nativeCoin: 'binancecoin', chainName: 'binance-smart-chain' },
                            8453: { nativeCoin: 'ethereum', chainName: 'base' },
                            84531: { nativeCoin: 'ethereum', chainName: 'base' },
                            84532: { nativeCoin: 'ethereum', chainName: 'base' },
                            11891: { nativeCoin: 'arianee', chainName: 'arianee' },
                        },
                    },
                },
                zerion: {
                    apiKey: process.env.ZERION_API_KEY,
                    baseUri: process.env.ZERION_BASE_URI || 'https://api.zerion.io',
                    chains: {
                        1: { chainName: 'ethereum' },
                        10: { chainName: 'optimism' },
                        56: { chainName: 'binance-smart-chain' },
                        100: { chainName: 'xdai' },
                        137: { chainName: 'polygon' },
                        324: { chainName: 'zksync-era' },
                        8453: { chainName: 'base' },
                        42161: { chainName: 'arbitrum' },
                        42220: { chainName: 'celo' },
                        43114: { chainName: 'avalanche' },
                        1313161554: { chainName: 'aurora' },
                    },
                    currencies: [
                        'usd',
                        'eur',
                        'eth',
                        'aud',
                        'btc',
                        'cad',
                        'chf',
                        'cny',
                        'gbp',
                        'inr',
                        'jpy',
                        'krw',
                        'nzd',
                        'rub',
                        'try',
                        'zar',
                    ],
                    limitPeriodSeconds: parseInt((_e = process.env.ZERION_RATE_LIMIT_PERIOD_SECONDS) !== null && _e !== void 0 ? _e : `${10}`),
                    limitCalls: parseInt((_f = process.env.ZERION_RATE_LIMIT_CALLS_BY_PERIOD) !== null && _f !== void 0 ? _f : `${2}`),
                },
            },
        },
        db: {
            postgres: {
                host: process.env.POSTGRES_HOST || 'localhost',
                port: process.env.POSTGRES_PORT || '5432',
                database: process.env.POSTGRES_DB || 'safe-client-gateway',
                username: process.env.POSTGRES_USER || 'postgres',
                password: process.env.POSTGRES_PASSWORD || 'postgres',
                ssl: {
                    enabled: ((_g = process.env.POSTGRES_SSL_ENABLED) === null || _g === void 0 ? void 0 : _g.toLowerCase()) === 'true',
                    requestCert: ((_h = process.env.POSTGRES_SSL_REQUEST_CERT) === null || _h === void 0 ? void 0 : _h.toLowerCase()) !== 'false',
                    rejectUnauthorized: ((_j = process.env.POSTGRES_SSL_REJECT_UNAUTHORIZED) === null || _j === void 0 ? void 0 : _j.toLowerCase()) !==
                        'false',
                    caPath: process.env.POSTGRES_SSL_CA_PATH,
                },
            },
        },
        email: {
            applicationCode: process.env.EMAIL_API_APPLICATION_CODE,
            baseUri: process.env.EMAIL_API_BASE_URI || 'https://api.pushwoosh.com',
            apiKey: process.env.EMAIL_API_KEY,
            fromEmail: process.env.EMAIL_API_FROM_EMAIL,
            fromName: process.env.EMAIL_API_FROM_NAME || 'Safe',
            templates: {
                recoveryTx: process.env.EMAIL_TEMPLATE_RECOVERY_TX,
                unknownRecoveryTx: process.env.EMAIL_TEMPLATE_UNKNOWN_RECOVERY_TX,
                verificationCode: process.env.EMAIL_TEMPLATE_VERIFICATION_CODE,
            },
            verificationCode: {
                resendLockWindowMs: parseInt((_k = process.env.EMAIL_VERIFICATION_CODE_RESEND_LOCK_WINDOW_MS) !== null && _k !== void 0 ? _k : `${30 * 1000}`),
                ttlMs: parseInt((_l = process.env.EMAIL_VERIFICATION_CODE_TTL_MS) !== null && _l !== void 0 ? _l : `${5 * 60 * 1000}`),
            },
        },
        expirationTimeInSeconds: {
            default: parseInt((_m = process.env.EXPIRATION_TIME_DEFAULT_SECONDS) !== null && _m !== void 0 ? _m : `${60}`),
            notFound: {
                default: parseInt((_o = process.env.DEFAULT_NOT_FOUND_EXPIRE_TIME_SECONDS) !== null && _o !== void 0 ? _o : `${30}`),
                contract: parseInt((_p = process.env.CONTRACT_NOT_FOUND_EXPIRE_TIME_SECONDS) !== null && _p !== void 0 ? _p : `${60}`),
                token: parseInt((_q = process.env.TOKEN_NOT_FOUND_EXPIRE_TIME_SECONDS) !== null && _q !== void 0 ? _q : `${60}`),
            },
        },
        express: {
            jsonLimit: (_r = process.env.EXPRESS_JSON_LIMIT) !== null && _r !== void 0 ? _r : '1mb',
        },
        features: {
            richFragments: ((_s = process.env.FF_RICH_FRAGMENTS) === null || _s === void 0 ? void 0 : _s.toLowerCase()) === 'true',
            email: ((_t = process.env.FF_EMAIL) === null || _t === void 0 ? void 0 : _t.toLowerCase()) === 'true',
            zerionBalancesChainIds: (_v = (_u = process.env.FF_ZERION_BALANCES_CHAIN_IDS) === null || _u === void 0 ? void 0 : _u.split(',')) !== null && _v !== void 0 ? _v : [],
            locking: ((_w = process.env.FF_LOCKING) === null || _w === void 0 ? void 0 : _w.toLowerCase()) === 'true',
            relay: ((_x = process.env.FF_RELAY) === null || _x === void 0 ? void 0 : _x.toLowerCase()) === 'true',
            swapsDecoding: ((_y = process.env.FF_SWAPS_DECODING) === null || _y === void 0 ? void 0 : _y.toLowerCase()) === 'true',
            historyDebugLogs: ((_z = process.env.FF_HISTORY_DEBUG_LOGS) === null || _z === void 0 ? void 0 : _z.toLowerCase()) === 'true',
            auth: ((_0 = process.env.FF_AUTH) === null || _0 === void 0 ? void 0 : _0.toLowerCase()) === 'true',
        },
        httpClient: {
            requestTimeout: parseInt((_1 = process.env.HTTP_CLIENT_REQUEST_TIMEOUT_MILLISECONDS) !== null && _1 !== void 0 ? _1 : `${5000}`),
        },
        jwt: {
            issuer: process.env.JWT_ISSUER,
            secret: process.env.JWT_SECRET,
        },
        locking: {
            baseUri: process.env.LOCKING_PROVIDER_API_BASE_URI ||
                'https://safe-locking.safe.global',
        },
        log: {
            level: process.env.LOG_LEVEL || 'debug',
            silent: ((_2 = process.env.LOG_SILENT) === null || _2 === void 0 ? void 0 : _2.toLowerCase()) === 'true',
        },
        owners: {
            ownersTtlSeconds: parseInt((_3 = process.env.OWNERS_TTL_SECONDS) !== null && _3 !== void 0 ? _3 : `${0}`),
        },
        mappings: {
            history: {
                maxNestedTransfers: parseInt((_4 = process.env.MAX_NESTED_TRANSFERS) !== null && _4 !== void 0 ? _4 : `${100}`),
            },
            safe: {
                maxOverviews: parseInt((_5 = process.env.MAX_SAFE_OVERVIEWS) !== null && _5 !== void 0 ? _5 : `${7}`),
            },
        },
        redis: {
            host: process.env.REDIS_HOST || 'localhost',
            port: process.env.REDIS_PORT || '6379',
        },
        relay: {
            baseUri: process.env.RELAY_PROVIDER_API_BASE_URI || 'https://api.gelato.digital',
            limit: parseInt((_6 = process.env.RELAY_THROTTLE_LIMIT) !== null && _6 !== void 0 ? _6 : `${5}`),
            ttlSeconds: parseInt((_7 = process.env.RELAY_THROTTLE_TTL_SECONDS) !== null && _7 !== void 0 ? _7 : `${60 * 60}`),
            apiKey: {
                100: process.env.RELAY_PROVIDER_API_KEY_GNOSIS_CHAIN,
                11155111: process.env.RELAY_PROVIDER_API_KEY_SEPOLIA,
            },
        },
        safeConfig: {
            baseUri: process.env.SAFE_CONFIG_BASE_URI || 'https://safe-config.safe.global/',
        },
        safeTransaction: {
            useVpcUrl: ((_8 = process.env.USE_TX_SERVICE_VPC_URL) === null || _8 === void 0 ? void 0 : _8.toLowerCase()) === 'true',
        },
        safeWebApp: {
            baseUri: process.env.SAFE_WEB_APP_BASE_URI || 'https://app.safe.global',
        },
        swaps: {
            api: {
                1: 'https://api.cow.fi/mainnet',
                100: 'https://api.cow.fi/xdai',
                11155111: 'https://api.cow.fi/sepolia',
            },
            explorerBaseUri: process.env.SWAPS_EXPLORER_URI || 'https://explorer.cow.fi/',
        },
    });
};
//# sourceMappingURL=configuration.js.map
