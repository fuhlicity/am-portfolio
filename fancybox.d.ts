declare module "@fancyapps/ui" {
    const Fancybox: {
      show: (items: Array<{ src: string; type: string }>, options?: Record<string, any>) => void;
    };
    export default Fancybox;
  }
  