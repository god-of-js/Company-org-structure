<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library as fontAwesomeIconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
fontAwesomeIconLibrary.add(faUser, faLock);

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class BaseIcon extends Vue {
  @Prop({ required: true }) iconName!: string;
}
</script>

<template>
  <FontAwesomeIcon :icon="iconName" />
</template>
