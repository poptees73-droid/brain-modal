/**
 * Get a JWT for widget socket/API calls.
 * Uses secretKey from config against backend POST /api/auth/widget-token.
 */
export declare const getWidgetToken: (userId: string) => Promise<string | null>;
export declare const clearWidgetToken: () => void;
//# sourceMappingURL=widgetAuth.d.ts.map