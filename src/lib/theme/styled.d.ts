
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {   
            textIcon: {
                inverted: string;
                neutral: {
                    calmest: string;
                    calm: string;
                    loud: string;
                    bold: string;
                };
                interact: {
                    enabled: string;
                    hover: string;
                    active: string;
                    focus: string;
                    disabled: string;
                };
                success: {
                    calmest: string;
                    calm: string;
                    loud: string;
                    bold: string;
                };
                critical: {
                    calmest: string;
                    calm: string;
                    loud: string;
                    bold: string;                        
                };        
            };
            bg: {   
                global: string;
                overlay: string;
                transparent: string;
                neutral: {
                    muted: string;
                    calmest: string;
                    calm: string;
                    loud: string;
                    loudest: string;
                    bold: string;
                };
                interact: {
                    green: {
                        enabled: string;
                        hover: string;
                        active: string;
                        focus: string;
                        disabled: string;
                    };
                    gray: {
                        enabled: string;
                        hover: string;
                        active: string;
                        focus: string;
                        disabled: string;
                    };
                    lighWeight: {
                        enabled: string;
                        hover: string;
                        active: string;
                        focus: string;
                        disabled: string;
                        selected: string;
                        readOnly: string;
                    };
                };
                success: {
                    calmest: string;
                    calm: string;
                    loud: string;
                    bold: string;
                };                
                critical: {
                    calmest: string;
                    calm: string;
                    loud: string;
                    loudest: string;
                    bold: string;
                };                
            };
            border: {   
                inverted: string;
                transparent: string;
                neutral: {
                    calmest: string;
                    calm: string;
                    loud: string;
                };
                interact: {
                    enabled: string;
                    hover: string;
                    active: string;
                    focus: string;
                    disabled: string;
                    readOnly: string;
                    complexComponent: string;                    
                };
                success: {
                    calmest: string;
                    calm: string;
                    loud: string;
                    bold: string;
                };
                critical: {
                    calmest: string;
                    calm: string;
                    loud: string;
                    loudest: string;
                    bold: string;
                };
            };            
        };
        typography: {
            fontFamily: {
                heading: string;
                text: string;
                component: string;
                monospace: string;
            };
            fontSize: {
                heading: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
                text: {
                    large: string;
                    base: string;
                    small: string;
                    xSmall: string;
                    xxSmall: string;
                    xxxSmall: string;
                };
                componet: {
                    base: string;
                    small: string;
                    xSmall: string;
                };
            };    
            lineHeight: {
                heading: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
                text: {
                    large: string;
                    base: string;
                    small: string;
                    xSmall: string;
                    xxSmall: string;
                    xxxSmall: string;
                };
                componet: {
                    base: string;
                    small: string;
                    xSmall: string;
                };
            };
            fontWeight: {
                light: string;
                regular: string;
                medium: string;
                semibold: string;
                bold: string;
                lightItalic: string;
                italic: string;
            };
        };
        spacing: {
            paddings: {
                noPaddings: string;
                xxxxxCompact: string;
                xxxxCompact: string;
                xxxCompact: string;
                xxCompact: string;
                xCompact: string;
                compact: string;
                default: string;
                relaxed: string;
                large: string;
                section: string;
            };
            inner: {
                noGap: string;
                closest: string;
                close: string;
                related: string;
                grouped: string;
            };
            outer: {
                close: string;
                related: string;
                grouped: string;
                xxSubSection: string;
                xSubSection: string;
                subSection: string;
                section: string;
            };
            widthHeight: {
                xxxxxxxxSmall: string;
                xxxxxxxSmall: string;
                xxxxxxSmall: string;
                xxxxxSmall: string;
                xxxxSmall: string;
                xxxSmall: string;
                xxSmall: string;
                xSmall: string;
                small: string;
                base: string;
                large: string;
                xLarge: string;
                xxLarge: string;
                xxxLarge: string;
                xxxxLarge: string;
            };
        };
        borderRadius: {
            noRadius: string;
            nano: string;
            micro: string;
            mini: string;
            componentInner: string;
            componentBase: string;
            sectionInner: string;
            sectionBase: string;
            rounded: string;
        };
        shadows: {
			surface: {
				elevated: string;
				hover: string;
			};
			overlay: {
				content: string;
				tooltip: string;
				drawer: string;
				modal: string;
				notifications: string;
			};
		};
		zIndices: {};
		focus: string;
		animation: {
			base: string;
        };
    };
};