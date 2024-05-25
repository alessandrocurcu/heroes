<script setup lang="ts">
// ❓ The SVGs has the title attribute?
import { ref, onMounted } from 'vue';
import {
  AdjustmentsHorizontalIcon,
  ArrowUpIcon,
  ArrowUpTrayIcon,
  ArrowDownIcon,
  ArrowDownTrayIcon,
  InformationCircleIcon,
  CheckIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XMarkIcon,
  PlusIcon,
  PlusSmallIcon,
  PlusCircleIcon,
  MinusIcon,
  MinusSmallIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon,
  EllipsisVerticalIcon,
  EllipsisHorizontalIcon,
  ChartPieIcon,
  WrenchIcon,
  ArrowUturnLeftIcon,
  LockOpenIcon,
  LockClosedIcon,
  Bars2Icon,
  CogIcon,
  TrashIcon,
  FolderIcon,
  FolderOpenIcon,
  MagnifyingGlassIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  CpuChipIcon,
  ArrowPathIcon
} from '@heroicons/vue/20/solid';
import { AdjustmentsHorizontalIcon as AdjustmentsHorizontalIconOutline } from '@heroicons/vue/24/outline';
import { ArrowTopRightOnSquareIcon as ArrowTopRightOnSquareIconOutline } from '@heroicons/vue/24/outline';
import { ArrowsPointingInIcon as ArrowsPointingInIconOutline } from '@heroicons/vue/24/outline';
import { ArrowsPointingOutIcon as ArrowsPointingOutIconOutline } from '@heroicons/vue/24/outline';
import { CogIcon as CogIconOutline } from '@heroicons/vue/24/outline';
import { CheckCircleIcon as CheckCircleIconOutline } from '@heroicons/vue/24/outline';
import { ExclamationCircleIcon as ExclamationCircleIconOutline } from '@heroicons/vue/24/outline';
import { ExclamationTriangleIcon as ExclamationTriangleIconOutline } from '@heroicons/vue/24/outline';
import { InformationCircleIcon as InformationCircleIconOutline } from '@heroicons/vue/24/outline';
import { PlusCircleIcon as PlusCircleIconOutline } from '@heroicons/vue/24/outline';
import { TrashIcon as TrashIconOutline } from '@heroicons/vue/24/outline';
import { PencilIcon as PencilIconOutline } from '@heroicons/vue/24/outline';
import { FolderIcon as FolderIconOutline } from '@heroicons/vue/24/outline';
import { FolderOpenIcon as FolderOpenIconOutline } from '@heroicons/vue/24/outline';
import { MagnifyingGlassIcon as MagnifyingGlassIconOutline } from '@heroicons/vue/24/outline';
import { PencilSquareIcon as PencilSquareIconOutline } from '@heroicons/vue/24/outline';
export interface IconWrapperProps {
  name: string;
}
const props = defineProps<IconWrapperProps>();
const icon: any = ref(null);
const importDynamic = async () => {
  return {
    AdjustmentsHorizontalIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    InformationCircleIcon,
    CheckIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    XMarkIcon,
    PlusIcon,
    PlusSmallIcon,
    PlusCircleIcon,
    MinusIcon,
    MinusSmallIcon,
    EyeIcon,
    EyeSlashIcon,
    ArrowRightIcon,
    ArrowUpTrayIcon,
    ArrowDownTrayIcon,
    ArrowsPointingInIconOutline,
    ArrowsPointingOutIconOutline,
    ChevronDownIcon,
    ChevronUpIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    PencilIcon,
    EllipsisVerticalIcon,
    EllipsisHorizontalIcon,
    ChartPieIcon,
    WrenchIcon,
    ArrowUturnLeftIcon,
    LockOpenIcon,
    LockClosedIcon,
    Bars2Icon,
    CogIcon,
    AdjustmentsHorizontalIconOutline,
    ArrowTopRightOnSquareIconOutline,
    CogIconOutline,
    ExclamationCircleIconOutline,
    ExclamationTriangleIconOutline,
    CheckCircleIconOutline,
    TrashIcon,
    PlusCircleIconOutline,
    InformationCircleIconOutline,
    TrashIconOutline,
    PencilIconOutline,
    FolderIcon,
    FolderOpenIcon,
    FolderIconOutline,
    FolderOpenIconOutline,
    MagnifyingGlassIcon,
    MagnifyingGlassIconOutline,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    CpuChipIcon,
    ArrowPathIcon,
    PencilSquareIconOutline
  };
};
defineOptions({ inheritAttrs: false });
onMounted(async () => {
  let icons: any;
  icons = await importDynamic();
  icon.value = icons?.[props.name] ?? icons?.['ExclamationCircleIcon'];
});
</script>
<template>
  <div v-bind="$attrs">
    <component :is="icon" />
  </div>
</template>
