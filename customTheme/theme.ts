export const theme = {
  navbar: {
    defaultProps: {
      shadow: false,
      blurred: false,
      color: "transparent",
    },
    styles: {
      base: {
        navbar: {
          initial: {
            boxShadow: "shadow-none",
            maxWidth: "max-w_screen-lg",
          },
        },
      },
    },
  },
  button: {
    styles: {
      base: {
        initial: {
          textTransform: "normal-case",
          fontSize: "text-lg",
        },
      },
    },
  },
  cardHeader: {
    styles: {
      base: {
        initial: {
          position: "static",
        },
      },
    },
  },
  card: {
    styles: {
      base: {
        initial: {
          position: "static",
        },
      },
    },
  },
};
