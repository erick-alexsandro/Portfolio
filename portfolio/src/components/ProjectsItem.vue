<template>
  <div class="item">
    <div class="details">
      <div class="heading">
        <i>
          <slot name="icon"></slot>
        </i>
        <h3>
          <slot name="heading"></slot>
        </h3>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1rem 2rem;
}

.heading {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.7rem;
  width: fit-content;
  padding: 0.4rem 0.7rem;
  margin-left: -1rem;
}

.heading:hover {
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.8;
}

.details {
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: white;
}
</style>
