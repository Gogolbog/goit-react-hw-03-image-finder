import { Vortex } from 'react-loader-spinner';

export function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Vortex
        visible={true}
        height={80}
        width={80}
        ariaLabel="vortex-loading"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
}
