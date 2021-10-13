<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library as fontAwesomeIconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
fontAwesomeIconLibrary.add(faFilter);

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class BaseIcon extends Vue {
  @Prop({ required: true }) icon!: string;
}
</script>

<template>
  <FontAwesomeIcon :icon="icon" />
</template>
