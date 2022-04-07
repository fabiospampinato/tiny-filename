
/* MAIN */

const filename = ( url: string ): string => {

  return new URL ( '', url ).pathname;

};

/* EXPORT */

export default filename;
