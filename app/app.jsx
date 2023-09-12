import { createEffect, createSignal } from 'solid-js';
import { toggleDeviceFlashlight } from './flashlight';

const App = () => {
  const [count, setCount] = createSignal(0);
  const [flashLightEnabled, setFlashLightEnabled] = createSignal(false);

  const increment = () => {
    setCount(count() + 1);
  };

  const toggle = () => {
    setFlashLightEnabled((prev) => !prev);
  };

  createEffect(() => {
    toggleDeviceFlashlight(flashLightEnabled());
  });

  return (
    <>
      <actionbar title="Hello, SolidJs!"></actionbar>
      <tabview>
        <tabviewitem title="Main Page">
          <stacklayout class="p-4">
            <image src="~/assets/rEFui.png" class="w-[150]" />
            <label class="text-2xl my-4 text-center">
              You have tapped {count} time
              {$(() => (count.value === 1 ? '' : 's'))}
            </label>
            <button
              class="rounded-full bg-blue-500 text-white text-center text-2xl p-4 font-bold"
              on:tap={increment}
            >
              Tap me!
            </button>
            <button
              class="rounded-full bg-blue-500 mt-2 text-white text-center text-2xl p-4 font-bold"
              on:tap={toggle}
            >
              {flashLightEnabled() ? 'Lights off' : 'Let there be light'}
            </button>
          </stacklayout>
        </tabviewitem>
        <tabviewitem title="Page B">
          <label>abc</label>
        </tabviewitem>
      </tabview>
    </>
  );
};

export { App };
