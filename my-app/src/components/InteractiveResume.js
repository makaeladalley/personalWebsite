import React, {Component, useState} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import './App.css';
import '../App.css';

// import Sidebar from "react-sidebar";
import Toolbar from "./Toolbar";
import Top from "./Top";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Blog from "./Blog";



export default class InteractiveResume extends Component {
    render() {
        return (
            <React.Fragment>
            <React.Fragment>
                <Toolbar></Toolbar>
                <Top></Top>
            </React.Fragment>
            <React.Fragment style={{overflow:"hidden"}}>
                <Sidebar></Sidebar>
            </React.Fragment>
            <AboutMe></AboutMe>
            <Work></Work>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            </React.Fragment>
        )
    }
}



    // <Grommet theme={theme} full>
    //   <Main pad="large" background="url(https://i.pinimg.com/originals/3e/ed/a1/3eeda1b9220917e74e36cc47d7291e44.jpg)">
    //   {/* <Main pad="large" background="url(https://wallpapertag.com/wallpaper/middle/a/0/d/95818-minimalist-background-3840x2160-for-iphone-5s.jpg)"> */}
    //     <Box direction='row'>
    //       <Box align='start' justify='start'>
    //         <Image height='47px' width='47px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA21BMVEX///9g3q5CPl7/0lkvKlHc2+DV1do/O1wpI01BNFpWU21h4rBSnItBOl1i5bJHX21AK1de1qk3Mlako67/11kwMV7VsFo3Nl5WrpSkilz19fYpLF46OF44NFczM14tKFD6zll6eIvKydDn5+q0s73euFp7al1kWF3yyFmylVvAoFsmIEtBNltRTWqbmafpwVmaglxPSF69vMVZvZyskFt0ZF3KqFubg1ybmqdraH5aUF2LiZqIc1x1c4dfXHX/3VhKb3RTS151ZV0jKF5qXF1Pi4JNgX1FTmVER2Lfs203AAAKiUlEQVR4nO2dfUPiuBbGx1II6K2rpchYWqqADuoAvuCMiro7c91dv/8nugU5SZqkJS1ME+7k+XOctvk16XnLKf30ycjI6DeQ3+9XayJV+31f9eDWlN8bn+46rm1Htkjxv7rO7um4t6WctdmobochsrKFwtCuj2Y11cPNq96pa6+EozFt97SnetA5NBhFoTQdKIxGA9UDl1QzcuVnLzGTbtRUPXgJDZBbCO9DLtJ9Hqsju9j84Xm0R1XVEFkaR+vxLRijsWqMVPm7/AJ12t1Wq5OmVqvbdrhj7FdNHWSNdQ+o3UL3x5dHk+FJRaST4eTo8vs9arXZA0Mt3ePgCiXxOj+OzypeLCHehxZ/Pjv+0UlCorqGBqdZTwyxi64nmWxJzsl1fAR9grp2fiMJ2EUXFVm8JWTlAnV1RkwABsFUevroiZwGgbaIPRqw9XOYn2/BOPzZohE1ClSrEW1hLovxLRgvaYsT6eP7LTKs9s2kOGCMOLkhKxVZqsFApySR6N6vgfehe2JwwlPVaB+6JWu0e54ygTnm1TsniNGtariFSCjTFgPGPv0oh/Hxztt4nTqq4eYa42A0+CIGvGjHoem5OHITHvAFP4uuBlG4j9couhFCeNPOYn5/yM/iyTteFpH6IHyGzUzrTMgwXPq41oU0onfWwcZmphrQx2u0eyxeo5dLw+G85XgUj7G1cVVPYhMI0Y0YwJsu7QbKsUwr3g2sU1d18IZgJK1vKYQwh+hGHrDifYP4DSG1gDUbBiK2o/OxwoIL5K3p3J7CrYvUZsPjcMUUVrwjmI3WpNAkhmodxi6CtZT6kIEttbq5QnIP1j/aVQnYB2fY/p4+eojLg+dchN8hson6Cgl78Bi2jlJH751DhNLNRYhXt60yT8S+wsoY6kV79W0QSQt/AXmT0JJ6S01gMoK0zEN8Z8CaKs2hRvCIXbNj97zh5fOXYF4MJpWJfNb0OtDA1IARabMxp3f01u0GbIk/yx7xhLC6lab68BgyjsAb/uwElkCtYQ5CCIYsVyEhNqUJf+9dtoR8+RwGCYZsdYC+0FksE0KhUjIsISFxF+rSCyGhd5wOmCfB0JbQu8wAjJ9YzupuHeHkv1mAltWRjU71IARbSghJ1jNfk64L3UFUSVWyZEwIVaX5/oOFdyswYWxGCV/0OOj1lh1epGqM2nKIhDC+zoMCyFub6ikhhD/wP7qv9LaDT6qqKJBCpAjjxWCXXhseXNEPFxBSo3KZIhm1PeUEMj6DJox1VfKucGI7jSKEWNIKH9lDZqSNAXUkKosMYdmbbUxTAiZ8gs4KQSX3leoEaz2v3MpgCVFYJmCTaSsBwpOs4opPbcJZbWeV12AJy80T2b4SIJyAtxfm5T59GGrdn2W3abCEZU4iLl6whMRJC2srfUTfmaDzdpTByBGWWc44ZXsrOcIUJ90PEx1QTutpOklruOEJS0z2LTa1XRKuDkP83eTNQe3O0/W3oSdoLOIJy0uFfXaRyhPG888ePO98u3m7nn47O5tMhsTE8oTlBai1dQg/Net8/yJygnmH37zH7xx2i0WEZRX4OUOTi/BTdZc7nlIQDNMJyzI1t1yTZS7CeBqvMtrAg3suAgS5ZQWnt+vNYSx/Zqczdoapc1gWoWiVVnIRxn5jdpXW7748WUXhKq3yhGfMoCSS1v7YEk8kEJ7xhGW1gfHeYrmwKjkLD72ZLXjvBG7XkCv4lFfO4Dx+p8Lcdumx1B4e3ch1aU4grLCEJRa/Z1zU5hUlnKvaezjdRVTXytJdcFFbeZ0ntYi5trUW4Yf6uKwFhOxKKXNHf5S8OK7zYsIC+7Z4Pxl2qEjHyfIqo19AkibGI+Ltw8kmCDtA+CVJWG4xKjmJEIYQ81fAruNGYzDM3n1if6fUKYyHk6hE4c3dE0yY/5HB8Xxn2XdDGgAWqpfcE92jMwS8aYbrNAWiD9L1AITPFCEqv6+9hlycr5O9XRhTgRgZx/MIEkTcb2I5LlLRGTV4gWns4vInmL8ChIMlIe5/I00c6EXVS0LgpPEmt/cEhPkrf1ChdJ7wHghsApdaKaXlg7kh2xZv0CGSvxkNWuTQG5fk11Vtr3E+mpi/AmUxKOCRrpt1vOtmhO17F1osSA8Mt22xUo9cb84QtyqoasDE9t2BzlHSEJw/DcC9OVMgPAHLrKyzDVs/CLwp41DPfTZ4qElvjgfQripT2gTb8ISLnMVD7z52+JAeEsscqurdgzTRuceEw8JBDQlpcN+U9+YUtsybEXh8qtPJw0FN3tuON+wCcjII29DLLxn/akGC0SZvWuCMRzio2sN4rgeRaXxZzhfVyInDtpLTCiIc0pA9a+IuBMb0se6GC9UFvsTinEUctoHdUvRGgqCbhjKmvKl5IaVyl5thHD1QbY7KO2oE1o/aBeYsfCKl5JI98Dw4w09YZvGG6y9Xj01ZF4LV5rDTNKB3Ozj+R3gM36lznWRumv96DdiEbrGycGLO+vxmJiFMcLIXHKX993I0FrWxU529TIqYKEGyhcFbYbcxaWZ/KA+LEp8MzIWLUeiV+f9UP03I/Q1mK7Hi10lVNqFX3r7T9517nd4f2R/OIrRHjG3Edbbkaw3rpCqbkLhRn3JinEu4nZ3ONeNKHIJ6yMe5lLbr4wy/m3xt7QTXj6Sr8OQRbSfe4CPN7PlTlQ2oKnKHFboIKP0qCLwBx/XyE4eo4gcketj8MS9RkNeU2Q7MFJGuxU7yZlFZvgqH2MT5759eQn+SWnUkM7AeXqPBOXsqq3jtTk793qCZJqirWDfT46SoWrX7kHo86IFEAsEzc6bpDSz4x9TjB73CIZ3ftOq2myrq90wY0dsNYfoJlqJ3WwP2VPgvKP0Edt1qForMm3bBHwcsX8i1869i/zWrcUk/5f6NN3+U/8cr1Spk46QV2jrAOWIewJftA4wRc9SrelyvxVZIyvt+iO4IcnQXGap8fE515jUaf+iuRgOPVjq2I43qjc/7+uszRpRumsKtJAd3+zv6a//uAJappDnFrYdf/94GwBjx76+wTOV8Ii7OHtztqR68nPAkSu544dT24FD10CV1iAnlEuUtJpQsBRhC/WQIDaH+MoSGUH8ZQkOovwyhIdRfhtAQ6i9DaAj1lyE0hPrLEBpC/WUIDeF62t85zNLOJrYoVRLuHf5jNbJk/XO4/ialSsLD90Z2cxxqvG/gKuoI9//6moaG9fWvtReqQkJ86Sxt8DKlE+7dSRGu3S6gkPD/fg539v7lv/bLyvl3bWOqkvDuYBWis4GeFqX+8O79INMfHrxvoGlHaUyzt3P3OUt3exvoSlIcl+5laxOXMJG3IdRfhtAQ6i9DaAj1lyE0hPrLEBpC/WUIDaH+MoSGUH8ZQkOovwyhIdRfhtAQ6i9D+DsT7uyv2N7UQ/s7RQkb/9kWNQoSZvfc6SSrKOHWyRAaQv1lCH9DQrQtKkqIdrdFqCChkp+YLqR6UUJVn8rKK98QMjKE+skQsjKE+skQsjKE+skQsvqNCKOtIYwKElpRfTuEf0Le5PiGUH8ZwqX62/nth7lkrf/rtnxBhxX3ub7UZXq1nYjoSvrbZdVRZG+folGej7P1a9snVZ+YNzIyWqn/AT193AfOyNFmAAAAAElFTkSuQmCC'></Image>
    //       </Box>
    //       <Box align='start' justify='end' direction='row' fill='width: true'>
    //         <Button focus='{outline: none, box-shadow: none}' margin="small" label="About" onClick={() => {document.getElementById('about').scrollIntoView({behavior: "smooth"})}} ></Button>
    //         <Button margin="small" label="My Work" onClick={() => {document.getElementById('work').scrollIntoView({behavior: "smooth"})}}></Button>
    //         <Button margin="small" label="Contact Me" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: "smooth"})}}></Button>
    //       </Box>
    //     </Box>

    //     <Box margin='xlarge' pad='xlarge' align='center'>
    //       <Heading size='large' color='white'>Makaela Dalley</Heading>
    //       <Paragraph size='large' color='white'>Software Engineer</Paragraph>
    //     </Box>
    //   </Main>

    //   <Box id='about'>
    //     <Heading color='#212E5B' alignSelf='center'>About Me</Heading>
    //     <Image alignSelf='center' height='55px' width='55px' src='data:image/png;base64,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'></Image>
    //     <Paragraph alignSelf='center'> Hi, I'm Makaela. I'm a recent Computer Science grad from the University of Michigan. I'm originally from Salt Lake City, UT, but I've spent most of my life in Grand Rapids, MI.</Paragraph>
    //   </Box>

    //   <Box id='work'>
    //     <Heading color='#212E5B' alignSelf='center'>My Work</Heading>
    //   </Box>

    //   <Box id='contact'>
    //     <Heading color='#212E5B' alignSelf='center'>Contact</Heading>
    //   </Box>

    //   {/* <Game/> */}

    //   <Footer background="brand" pad="medium">
    //     <Text>Copyright</Text>
    //     <Box justify='end' direction='row'>
    //       <Image height='30px' width='30px' src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'></Image>
    //       <Image height='35px' width='35px' src='https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png'></Image>
    //     </Box>
    //   </Footer>
    // </Grommet>

const theme = {
  "global": {
    "colors": {
      "icon": {
        "0": "#",
        "1": "6",
        "2": "6",
        "3": "6",
        "4": "6",
        "5": "6",
        "6": "6",
        "dark": "#f8f8f8",
        "light": "#666666"
      },
      "active": {
        "0": "r",
        "1": "g",
        "2": "b",
        "3": "a",
        "4": "(",
        "5": "2",
        "6": "2",
        "7": "1",
        "8": ",",
        "9": "2",
        "10": "2",
        "11": "1",
        "12": ",",
        "13": "2",
        "14": "2",
        "15": "1",
        "16": ",",
        "17": "0",
        "18": ".",
        "19": "5",
        "20": ")",
        "light": "#f50057",
        "dark": "#ff4081"
      },
      "black": "#000000",
      "border": {
        "dark": "rgba(255,255,255,0.33)",
        "light": "rgba(0,0,0,0.33)"
      },
      "brand": "#00ABD4",
      "control": {
        "dark": "#ffffff",
        "light": "#00ABD4"
      },
      "focus": "#2AD2C9",
      "placeholder": "#AAAAAA",
      "selected": "brand",
      "text": {
        "dark": "#f8f8f8",
        "light": "#444444"
      },
      "white": "#FFFFFF",
      "accent-1": "#2AD2C9",
      "accent-2": "#FFC107",
      "accent-3": "#9C27B0",
      "accent-4": "#673AB7",
      "dark-1": "#333333",
      "dark-2": "#555555",
      "dark-3": "#777777",
      "dark-4": "#999999",
      "dark-5": "#999999",
      "dark-6": "#999999",
      "light-1": "#F8F8F8",
      "light-2": "#F2F2F2",
      "light-3": "#EDEDED",
      "light-4": "#DADADA",
      "light-5": "#DADADA",
      "light-6": "#DADADA",
      "neutral-1": "#795548",
      "neutral-2": "#009688",
      "neutral-3": "#8BC34A",
      "neutral-4": "#CDDC39",
      "status-critical": "#FF4081",
      "status-error": "#F44336",
      "status-warning": "#FFEB3B",
      "status-ok": "#4CAF50",
      "status-unknown": "#9E9E9E",
      "status-disabled": "#9E9E9E",
      "neutral-5": "#FF9800"
    },
    "animation": {
      "duration": "1s",
      "jiggle": {
        "duration": "0.1s"
      }
    },
    "borderSize": {
      "xsmall": "1px",
      "small": "2px",
      "medium": "4px",
      "large": "12px",
      "xlarge": "24px"
    },
    "breakpoints": {
      "small": {
        "value": 768,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "4px",
          "large": "6px",
          "xlarge": "12px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "3px",
          "small": "6px",
          "medium": "12px",
          "large": "24px",
          "xlarge": "48px"
        },
        "size": {
          "xxsmall": "24px",
          "xsmall": "48px",
          "small": "96px",
          "medium": "192px",
          "large": "384px",
          "xlarge": "768px",
          "full": "100%"
        }
      },
      "medium": {
        "value": 1536
      },
      "large": {}
    },
    "deviceBreakpoints": {
      "phone": "small",
      "tablet": "medium",
      "computer": "large"
    },
    "control": {
      "border": {
        "width": "1px",
        "radius": "0px",
        "color": "border"
      }
    },
    "debounceDelay": 300,
    "drop": {
      "background": "#f8f8f8",
      "border": {
        "width": "0px",
        "radius": "0px"
      },
      "shadowSize": "small",
      "zIndex": "20"
    },
    "edgeSize": {
      "none": "0px",
      "hair": "1px",
      "xxsmall": "3px",
      "xsmall": "6px",
      "small": "12px",
      "medium": "24px",
      "large": "48px",
      "xlarge": "96px",
      "responsiveBreakpoint": "small"
    },
    "elevation": {
      "light": {
        "none": "none",
        "xsmall": "0px 1px 2px rgba(0, 0, 0, 0.20)",
        "small": "0px 2px 4px rgba(0, 0, 0, 0.20)",
        "medium": "0px 4px 8px rgba(0, 0, 0, 0.20)",
        "large": "0px 8px 16px rgba(0, 0, 0, 0.20)",
        "xlarge": "0px 12px 24px rgba(0, 0, 0, 0.20)"
      },
      "dark": {
        "none": "none",
        "xsmall": "0px 2px 2px rgba(255, 255, 255, 0.40)",
        "small": "0px 4px 4px rgba(255, 255, 255, 0.40)",
        "medium": "0px 6px 8px rgba(255, 255, 255, 0.40)",
        "large": "0px 8px 16px rgba(255, 255, 255, 0.40)",
        "xlarge": "0px 12px 24px rgba(255, 255, 255, 0.40)"
      }
    },
    "focus": {
      "border": {
        "color": "#01ABD4"
      }
    },
    "font": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px",
      "family": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    },
    "hover": {
      "background": {
        "dark": "#ff4081",
        "light": "#f50057"
      },
      "color": {
        "dark": "white",
        "light": "black"
      },
      "text": {
        "light": "#000000",
        "dark": "#f8f8f8"
      }
    },
    "input": {
      "padding": "12px",
      "weight": 600
    },
    "opacity": {
      "strong": 0.8,
      "medium": 0.4,
      "weak": 0.1
    },
    "selected": {
      "background": "selected",
      "color": "white"
    },
    "spacing": "24px",
    "size": {
      "xxsmall": "48px",
      "xsmall": "96px",
      "small": "192px",
      "medium": "384px",
      "large": "768px",
      "xlarge": "1152px",
      "xxlarge": "1536px",
      "full": "100%"
    }
  },
  "icon": {
    "size": {
      "small": "12px",
      "medium": "24px",
      "large": "48px",
      "xlarge": "96px"
    }
  },
  "accordion": {
    "icons": {}
  },
  "anchor": {
    "textDecoration": "none",
    "fontWeight": 600,
    "color": {
      "dark": "#7986cb",
      "light": "#3f51b5"
    },
    "hover": {
      "textDecoration": "underline"
    }
  },
  "box": {
    "responsiveBreakpoint": "small"
  },
  "button": {
    "border": {
      "width": "2px",
      "radius": "40px"
    },
    "primary": {
      "color": {
        "light": "#3f51b5",
        "dark": "#7986cb"
      }
    },
    "disabled": {
      "opacity": 0.3
    },
    "minWidth": "96px",
    "maxWidth": "384px",
    "padding": {
      "vertical": "4px",
      "horizontal": "22px"
    }
  },
  "calendar": {
    "small": {
      "fontSize": "14px",
      "lineHeight": 1.375,
      "daySize": "27.428571428571427px",
      "slideDuration": "0.2s"
    },
    "medium": {
      "fontSize": "18px",
      "lineHeight": 1.45,
      "daySize": "54.857142857142854px",
      "slideDuration": "0.5s"
    },
    "large": {
      "fontSize": "30px",
      "lineHeight": 1.11,
      "daySize": "109.71428571428571px",
      "slideDuration": "0.8s"
    },
    "icons": {
      "small": {}
    }
  },
  "carousel": {
    "icons": {}
  },
  "chart": {},
  "checkBox": {
    "border": {
      "color": {
        "dark": "rgba(255, 255, 255, 0.5)",
        "light": "rgba(0, 0, 0, 0.15)"
      },
      "width": "2px"
    },
    "check": {
      "radius": "0px",
      "thickness": "4px"
    },
    "icon": {},
    "icons": {},
    "hover": {
      "border": {
        "color": {
          "dark": "white",
          "light": "black"
        }
      }
    },
    "size": "24px",
    "toggle": {
      "color": {
        "dark": "#bdbdbd",
        "light": "#00ABD4"
      },
      "radius": "24px",
      "size": "48px",
      "knob": {}
    },
    "color": {
      "light": "#00ABD4",
      "dark": "#a7ecff"
    }
  },
  "clock": {
    "analog": {
      "hour": {
        "color": {
          "dark": "light-2",
          "light": "dark-3"
        },
        "width": "8px",
        "size": "24px",
        "shape": "round"
      },
      "minute": {
        "color": {
          "dark": "light-4",
          "light": "dark-3"
        },
        "width": "4px",
        "size": "12px",
        "shape": "round"
      },
      "second": {
        "color": {
          "dark": "accent-1",
          "light": "accent-1"
        },
        "width": "3px",
        "size": "9px",
        "shape": "round"
      },
      "size": {
        "small": "72px",
        "medium": "96px",
        "large": "144px",
        "xlarge": "216px",
        "huge": "288px"
      }
    },
    "digital": {
      "text": {
        "xsmall": {
          "size": "10px",
          "height": 1.5
        },
        "small": {
          "size": "14px",
          "height": 1.43
        },
        "medium": {
          "size": "18px",
          "height": 1.375
        },
        "large": {
          "size": "22px",
          "height": 1.167
        },
        "xlarge": {
          "size": "26px",
          "height": 1.1875
        },
        "xxlarge": {
          "size": "34px",
          "height": 1.125
        }
      }
    }
  },
  "collapsible": {
    "minSpeed": 200,
    "baseline": 500
  },
  "dataTable": {
    "header": {},
    "groupHeader": {
      "border": {
        "side": "bottom",
        "size": "xsmall"
      },
      "fill": "vertical",
      "pad": {
        "horizontal": "small",
        "vertical": "xsmall"
      },
      "background": {
        "dark": "dark-2",
        "light": "light-2"
      }
    },
    "icons": {},
    "resize": {
      "border": {
        "side": "right",
        "color": "border"
      }
    },
    "primary": {
      "weight": "bold"
    }
  },
  "diagram": {
    "line": {
      "color": "accent-1"
    }
  },
  "formField": {
    "border": {
      "color": "border",
      "position": "inner",
      "side": "bottom",
      "error": {
        "color": {
          "dark": "white",
          "light": "status-critical"
        }
      }
    },
    "content": {
      "pad": {
        "horizontal": "small",
        "bottom": "small"
      }
    },
    "error": {
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      },
      "color": {
        "dark": "status-critical",
        "light": "status-critical"
      }
    },
    "help": {
      "margin": {
        "left": "small"
      },
      "color": {
        "dark": "dark-3",
        "light": "dark-3"
      }
    },
    "label": {
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      }
    },
    "margin": {
      "bottom": "small"
    }
  },
  "grommet": {},
  "heading": {
    "font": {},
    "level": {
      "1": {
        "font": {},
        "small": {
          "size": "34px",
          "height": "40px",
          "maxWidth": "816px"
        },
        "medium": {
          "size": "50px",
          "height": "56px",
          "maxWidth": "1200px"
        },
        "large": {
          "size": "82px",
          "height": "88px",
          "maxWidth": "1968px"
        },
        "xlarge": {
          "size": "114px",
          "height": "120px",
          "maxWidth": "2736px"
        }
      },
      "2": {
        "font": {},
        "small": {
          "size": "26px",
          "height": "32px",
          "maxWidth": "624px"
        },
        "medium": {
          "size": "34px",
          "height": "40px",
          "maxWidth": "816px"
        },
        "large": {
          "size": "50px",
          "height": "56px",
          "maxWidth": "1200px"
        },
        "xlarge": {
          "size": "66px",
          "height": "72px",
          "maxWidth": "1584px"
        }
      },
      "3": {
        "font": {},
        "small": {
          "size": "22px",
          "height": "28px",
          "maxWidth": "528px"
        },
        "medium": {
          "size": "26px",
          "height": "32px",
          "maxWidth": "624px"
        },
        "large": {
          "size": "34px",
          "height": "40px",
          "maxWidth": "816px"
        },
        "xlarge": {
          "size": "42px",
          "height": "48px",
          "maxWidth": "1008px"
        }
      },
      "4": {
        "font": {},
        "small": {
          "size": "18px",
          "height": "24px",
          "maxWidth": "432px"
        },
        "medium": {
          "size": "18px",
          "height": "24px",
          "maxWidth": "432px"
        },
        "large": {
          "size": "18px",
          "height": "24px",
          "maxWidth": "432px"
        },
        "xlarge": {
          "size": "18px",
          "height": "24px",
          "maxWidth": "432px"
        }
      },
      "5": {
        "font": {},
        "small": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "384px"
        },
        "medium": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "384px"
        },
        "large": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "384px"
        },
        "xlarge": {
          "size": "16px",
          "height": "22px",
          "maxWidth": "384px"
        }
      },
      "6": {
        "font": {},
        "small": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        },
        "medium": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        },
        "large": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        },
        "xlarge": {
          "size": "14px",
          "height": "20px",
          "maxWidth": "336px"
        }
      }
    },
    "responsiveBreakpoint": "small",
    "weight": 600
  },
  "layer": {
    "background": "white",
    "border": {
      "radius": "4px"
    },
    "container": {
      "zIndex": "15"
    },
    "overlay": {
      "background": "rgba(0, 0, 0, 0.5)"
    },
    "responsiveBreakpoint": "small",
    "zIndex": "10"
  },
  "menu": {
    "icons": {}
  },
  "meter": {
    "color": "accent-1"
  },
  "paragraph": {
    "small": {
      "size": "14px",
      "height": "20px",
      "maxWidth": "336px"
    },
    "medium": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "large": {
      "size": "22px",
      "height": "28px",
      "maxWidth": "528px"
    },
    "xlarge": {
      "size": "26px",
      "height": "32px",
      "maxWidth": "624px"
    },
    "xxlarge": {
      "size": "34px",
      "height": "40px",
      "maxWidth": "816px"
    }
  },
  "radioButton": {
    "border": {
      "color": {
        "dark": "rgba(255, 255, 255, 0.5)",
        "light": "rgba(0, 98, 186, 0.5)"
      },
      "width": "2px"
    },
    "check": {
      "radius": "100%"
    },
    "hover": {
      "border": {
        "color": {
          "dark": "white",
          "light": "black"
        }
      }
    },
    "icon": {},
    "icons": {},
    "gap": "small",
    "size": "24px"
  },
  "rangeInput": {
    "track": {
      "height": "4px",
      "color": [
        null,
        ";"
      ]
    },
    "thumb": {}
  },
  "rangeSelector": {
    "background": {
      "invert": {
        "color": "light-4"
      }
    }
  },
  "select": {
    "container": {},
    "control": {},
    "icons": {},
    "options": {
      "box": {
        "align": "start",
        "pad": "small"
      },
      "text": {
        "margin": "none"
      }
    },
    "step": 20
  },
  "tab": {
    "active": {
      "color": "text"
    },
    "border": {
      "side": "bottom",
      "size": "small",
      "color": {
        "dark": "accent-1",
        "light": "brand"
      },
      "active": {
        "color": {
          "dark": "white",
          "light": "black"
        }
      },
      "hover": {
        "color": {
          "dark": "white",
          "light": "black"
        }
      }
    },
    "color": "control",
    "hover": {
      "color": {
        "dark": "white",
        "light": "black"
      }
    },
    "margin": {
      "vertical": "xxsmall",
      "horizontal": "small"
    },
    "pad": {
      "bottom": "xsmall"
    }
  },
  "tabs": {
    "header": {},
    "panel": {}
  },
  "table": {
    "header": {
      "align": "start",
      "pad": {
        "horizontal": "small",
        "vertical": "xsmall"
      },
      "border": "bottom",
      "verticalAlign": "bottom",
      "fill": "vertical"
    },
    "body": {
      "align": "start",
      "pad": {
        "horizontal": "small",
        "vertical": "xsmall"
      }
    },
    "footer": {
      "align": "start",
      "pad": {
        "horizontal": "small",
        "vertical": "xsmall"
      },
      "border": "top",
      "verticalAlign": "top",
      "fill": "vertical"
    }
  },
  "text": {
    "xsmall": {
      "size": "12px",
      "height": "18px",
      "maxWidth": "288px"
    },
    "small": {
      "size": "14px",
      "height": "20px",
      "maxWidth": "336px"
    },
    "medium": {
      "size": "18px",
      "height": "24px",
      "maxWidth": "432px"
    },
    "large": {
      "size": "22px",
      "height": "28px",
      "maxWidth": "528px"
    },
    "xlarge": {
      "size": "26px",
      "height": "32px",
      "maxWidth": "624px"
    },
    "xxlarge": {
      "size": "34px",
      "height": "40px",
      "maxWidth": "816px"
    }
  },
  "video": {
    "captions": {
      "background": "rgba(0, 0, 0, 0.7)"
    },
    "icons": {},
    "scrubber": {
      "color": "light-4"
    }
  },
  "worldMap": {
    "color": "light-3",
    "continent": {
      "active": "8px",
      "base": "6px"
    },
    "hover": {
      "color": "light-4"
    },
    "place": {
      "active": "20px",
      "base": "8px"
    }
  }
};




// const theme = {
//   global: {
//     colors: {
//       brand: '#228BE6',
//     },
//     font: {
//       family: 'Roboto',
//       size: '18px',
//       height: '20px',
//     },
//   },
// };

// const AppBar = (props) => (
//   <Box
//     tag='header'
//     direction='row'
//     align='center'
//     justify='between'
//     background='brand'
//     pad={{ left: 'medium', right: 'small', vertical: 'small' }}
//     elevation='medium'
//     style={{ zIndex: '1' }}
//     {...props}
//   />
// );





// about, work, contact

// function App() {
//   const [showSidebar, setShowSidebar] = useState(false);
//   return (
//     <Grommet theme={theme} full>
//       <ResponsiveContext.Consumer>
//         {size => (
//           <Box fill>
//             <AppBar>
//               <Heading level='3' align='center'>Makaela Dalley</Heading>
//               <Button
//                 icon={<Notification />}
//                 onClick={() => setShowSidebar(!showSidebar)}
//               />
//             </AppBar>
//             <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
//               <Box flex align='center' justify='center'>
//                 app body
//               </Box>
//               {(!showSidebar || size !== 'small') ? (
//                 <Collapsible direction="horizontal" open={showSidebar}>
//                   <Box
//                     flex
//                     width='medium'
//                     background='light-2'
//                     elevation='small'
//                     align='center'
//                     justify='center'
//                   >
//                     sidebar
//                   </Box>
//                 </Collapsible>
//               ): (
//                 <Layer>
//                   <Box
//                     background='light-2'
//                     tag='header'
//                     justify='end'
//                     align='center'
//                     direction='row'
//                   >
//                     <Button
//                       icon={<FormClose />}
//                       onClick={() => setShowSidebar(false)}
//                     />
//                   </Box>
//                   <Box
//                     fill
//                     background='light-2'
//                     align='center'
//                     justify='center'
//                   >
//                     sidebar
//                   </Box>
//                 </Layer>
//               )}
//             </Box>
//           </Box>
//         )}
//       </ResponsiveContext.Consumer>
//     </Grommet>
//   );
// }

// export default App;
