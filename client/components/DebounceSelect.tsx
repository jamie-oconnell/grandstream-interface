import React, {useState, useMemo, useRef} from "react";
import debounce from 'lodash/debounce';
import { Select, Spin } from "antd";
import { SelectProps } from "antd/es/select";

interface Props {}

type ValueType = {
  key?: string;
  label: React.ReactNode;
  value: string | number;
};

interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

const DebounceSelect = ({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps) => {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select<ValueType>
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
};

export default DebounceSelect;
