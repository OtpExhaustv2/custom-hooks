import { useEffect, useRef, useState } from "react";
import { useDeepCompareEffect } from "./useDeepCompareEffect";

interface DeepCompareComponentProps {}

const DeepCompareComponent: React.FC<DeepCompareComponentProps> = ({}) => {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectCountRef = useRef<HTMLSpanElement | null>(null);
  const useDeepCompareEffectCountRef = useRef<HTMLSpanElement | null>(null);

  const person = { age: age, name: "sébou" };

  useEffect(() => {
    if (useEffectCountRef.current?.textContent) {
      useEffectCountRef.current.textContent =
        parseInt(useEffectCountRef.current?.textContent!) + 1 + "";
    }
  }, [person]);

  useDeepCompareEffect(() => {
    if (useDeepCompareEffectCountRef.current?.textContent) {
      useDeepCompareEffectCountRef.current.textContent =
        parseInt(useDeepCompareEffectCountRef.current.textContent) + 1 + "";
    }
  }, [person]);

  return (
    <div>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div>Other count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge((currAge) => currAge + 1)}>
        Increment age
      </button>
      <button onClick={() => setOtherCount((c) => c + 1)}>
        Increment other count
      </button>
    </div>
  );
};

export default DeepCompareComponent;
