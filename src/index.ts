
/* IMPORT */

import fileurl2path from 'fileurl2path';

/* MAIN */

const filename = ( url: string ): string => {

  return fileurl2path ( new URL ( '', url ) );

};

/* EXPORT */

export default filename;
