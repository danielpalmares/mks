import {
  SkeletonContainer,
  SkeletonButton,
  SkeletonFlex,
  SkeletonImage,
  SkeletonInformation,
} from './styles';

export function Skeleton() {
  return (
    <SkeletonContainer>
      <SkeletonImage />

      <SkeletonFlex>
        <SkeletonInformation />
        <SkeletonInformation />
      </SkeletonFlex>

      <SkeletonFlex>
        <SkeletonInformation />
      </SkeletonFlex>

      <SkeletonButton />
    </SkeletonContainer>
  );
}
