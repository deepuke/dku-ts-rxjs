type ReadonlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

interface Props {
  title: string;
  content: string;
}

type ReadonlyComponentProps = ReadonlyProps<Props>;

function ReadonlyComponent(props: ReadonlyComponentProps) {
  return {
    props,
  };
}

export default ReadonlyComponent;
