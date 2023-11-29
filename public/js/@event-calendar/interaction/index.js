import { writable } from 'svelte/store';
import { SvelteComponent, init, safe_not_equal, noop, listen, is_function, run_all, component_subscribe, globals, set_store_value, bubble, empty, insert, detach, element, attr, create_component, space, mount_component, transition_in, group_outros, transition_out, check_outros, destroy_component, binding_callbacks } from 'svelte/internal';
import { getContext } from 'svelte';
import { max, min, cloneDate, addDuration, getElementWithPayload, getPayload, ancestor, createDuration, subtractDuration, toEventWithLocalDates, toISOString, toViewWithLocalDates, cloneEvent, assign, toLocalDate, rect, addDay, floor, bgEvent, helperEvent } from '@event-calendar/core';

let busy = false;
function animate(fn) {
    if (!busy) {
        busy = true;
        window.requestAnimationFrame(() => {
            fn();
            busy = false;
        });
    }
}

function limit(value, minLimit, maxLimit) {
    return max(minLimit, min(maxLimit, value));
}

/* packages/interaction/src/Action.svelte generated by Svelte v4.2.2 */

const { window: window_1 } = globals;

function create_fragment$3(ctx) {
	let mounted;
	let dispose;

	return {
		c: noop,
		m(target, anchor) {
			if (!mounted) {
				dispose = [
					listen(window_1, "pointermove", /*handlePointerMove*/ ctx[31]),
					listen(window_1, "pointerup", /*handlePointerUp*/ ctx[32]),
					listen(window_1, "pointercancel", /*handlePointerUp*/ ctx[32]),
					listen(window_1, "scroll", /*handleScroll*/ ctx[0]),
					listen(window_1, "selectstart", createPreventDefaultHandler(/*complexAction*/ ctx[33])),
					listen(window_1, "contextmenu", function () {
						if (is_function(createPreventDefaultHandler(/*contextmenu_handler*/ ctx[40]))) createPreventDefaultHandler(/*contextmenu_handler*/ ctx[40]).apply(this, arguments);
					}),
					listen(window_1, "touchstart", /*handleTouchStart*/ ctx[34]),
					listen(window_1, "touchmove", /*touchmove_handler*/ ctx[39], { passive: false })
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		i: noop,
		o: noop,
		d(detaching) {
			mounted = false;
			run_all(dispose);
		}
	};
}

const ACTION_DRAG = 1;
const ACTION_RESIZE = 2;
const ACTION_SELECT = 3;
const ACTION_CLICK = 4;
const ACTION_NO_ACTION = 5;

function validJsEvent(jsEvent) {
	return jsEvent.isPrimary && (jsEvent.pointerType !== 'mouse' || jsEvent.buttons & 1);
}

function createPreventDefaultHandler(condition) {
	return jsEvent => {
		if (condition()) {
			jsEvent.preventDefault();
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let $_view;
	let $unselectFn;
	let $_events;
	let $_iEvents;
	let $selectBackgroundColor;
	let $_dayGrid;
	let $_iClass;
	let $dateClick;
	let $eventDrop;
	let $eventResize;
	let $eventDragStop;
	let $eventResizeStop;
	let $selectFn;
	let $unselectCancel;
	let $unselectAuto;
	let $slotHeight;
	let $dragScroll;
	let $eventDragStart;
	let $eventResizeStart;
	let $eventDragMinDistance;
	let $selectMinDistance;
	let $longPressDelay;
	let $eventLongPressDelay;
	let $selectLongPressDelay;
	let $datesAboveResources;
	let $slotDuration;
	let $view;
	let $selectable;
	let $_draggable;
	let { _iEvents, _iClass, _events, _view, _dayGrid, _draggable, dateClick, dragScroll, datesAboveResources, eventDragMinDistance, eventDragStart, eventDragStop, eventDrop, eventLongPressDelay, eventResizeStart, eventResizeStop, eventResize, longPressDelay, selectable, select: selectFn, selectBackgroundColor, selectLongPressDelay, selectMinDistance, slotDuration, slotHeight, unselect: unselectFn, unselectAuto, unselectCancel, view } = getContext('state');
	component_subscribe($$self, _iEvents, value => $$invalidate(68, $_iEvents = value));
	component_subscribe($$self, _iClass, value => $$invalidate(71, $_iClass = value));
	component_subscribe($$self, _events, value => $$invalidate(67, $_events = value));
	component_subscribe($$self, _view, value => $$invalidate(65, $_view = value));
	component_subscribe($$self, _dayGrid, value => $$invalidate(70, $_dayGrid = value));
	component_subscribe($$self, _draggable, value => $$invalidate(93, $_draggable = value));
	component_subscribe($$self, dateClick, value => $$invalidate(72, $dateClick = value));
	component_subscribe($$self, dragScroll, value => $$invalidate(81, $dragScroll = value));
	component_subscribe($$self, datesAboveResources, value => $$invalidate(89, $datesAboveResources = value));
	component_subscribe($$self, eventDragMinDistance, value => $$invalidate(84, $eventDragMinDistance = value));
	component_subscribe($$self, eventDragStart, value => $$invalidate(82, $eventDragStart = value));
	component_subscribe($$self, eventDragStop, value => $$invalidate(75, $eventDragStop = value));
	component_subscribe($$self, eventDrop, value => $$invalidate(73, $eventDrop = value));
	component_subscribe($$self, eventLongPressDelay, value => $$invalidate(87, $eventLongPressDelay = value));
	component_subscribe($$self, eventResizeStart, value => $$invalidate(83, $eventResizeStart = value));
	component_subscribe($$self, eventResizeStop, value => $$invalidate(76, $eventResizeStop = value));
	component_subscribe($$self, eventResize, value => $$invalidate(74, $eventResize = value));
	component_subscribe($$self, longPressDelay, value => $$invalidate(86, $longPressDelay = value));
	component_subscribe($$self, selectable, value => $$invalidate(92, $selectable = value));
	component_subscribe($$self, selectFn, value => $$invalidate(77, $selectFn = value));
	component_subscribe($$self, selectBackgroundColor, value => $$invalidate(69, $selectBackgroundColor = value));
	component_subscribe($$self, selectLongPressDelay, value => $$invalidate(88, $selectLongPressDelay = value));
	component_subscribe($$self, selectMinDistance, value => $$invalidate(85, $selectMinDistance = value));
	component_subscribe($$self, slotDuration, value => $$invalidate(90, $slotDuration = value));
	component_subscribe($$self, slotHeight, value => $$invalidate(80, $slotHeight = value));
	component_subscribe($$self, unselectFn, value => $$invalidate(66, $unselectFn = value));
	component_subscribe($$self, unselectAuto, value => $$invalidate(79, $unselectAuto = value));
	component_subscribe($$self, unselectCancel, value => $$invalidate(78, $unselectCancel = value));
	component_subscribe($$self, view, value => $$invalidate(91, $view = value));
	let action;
	let interacting;
	let event;
	let display;
	let date, newDate;
	let resource, newResource;
	let fromX, fromY;
	let toX, toY;
	let bodyEl, bodyRect, clipEl, clipRect;
	let delta;
	let allDay;
	let iClass;
	let minEnd; // minimum end time when resizing
	let selectStep; // minimum selection step
	let selected; // whether selection has been made
	let noDateClick; // do not perform date click
	let timer; // timer for long press delays
	let viewport;

	function drag(eventToDrag, jsEvent, resize, forceDate) {
		if (!action) {
			action = validJsEvent(jsEvent)
			? resize
				? ACTION_RESIZE
				: $_draggable(eventToDrag)
					? ACTION_DRAG
					: ACTION_NO_ACTION
			: ACTION_NO_ACTION;

			if (complexAction()) {
				event = eventToDrag;
				common(jsEvent);

				if (forceDate) {
					// Force date in popup
					date = forceDate;
				}

				iClass = resize ? allDay ? 'resizingX' : 'resizingY' : 'dragging';

				if (resize) {
					minEnd = cloneDate(event.start);

					if (allDay) {
						minEnd.setUTCHours(event.end.getUTCHours(), event.end.getUTCMinutes(), event.end.getUTCSeconds(), 0);

						if (minEnd < event.start) {
							addDay(minEnd);
						} // minEnd = addDuration(cloneDate(event.start), $slotDuration);  alternative version
					} else {
						addDuration(minEnd, $slotDuration);
					}
				}

				move(jsEvent);
			}
		}
	}

	function select(jsEvent) {
		if (!action) {
			action = validJsEvent(jsEvent)
			? $selectable && !$view.startsWith('list')
				? ACTION_SELECT
				: ACTION_CLICK
			: ACTION_NO_ACTION;

			if (complexAction()) {
				common(jsEvent);
				iClass = 'selecting';
				selectStep = allDay ? createDuration({ day: 1 }) : $slotDuration;

				// Create dummy source event
				event = {
					allDay,
					start: date,
					end: addDuration(cloneDate(date), selectStep),
					resourceIds: resource ? [resource.id] : []
				};

				move(jsEvent);
			}
		}
	}

	function common(jsEvent) {
		window.getSelection().removeAllRanges();
		fromX = toX = jsEvent.clientX;
		fromY = toY = jsEvent.clientY;
		let dayEl = getElementWithPayload(toX, toY);
		({ allDay, date, resource } = getPayload(dayEl)(toY));
		bodyEl = ancestor(dayEl, resource ? 4 : 3);
		clipEl = ancestor(dayEl, resource && (dragging() || $datesAboveResources) ? 2 : 1);
		calcViewport();

		if (jsEvent.pointerType !== 'mouse') {
			// For touch devices init long press delay
			$$invalidate(1, timer = setTimeout(
				() => {
					if (action) {
						interacting = true;
						move(jsEvent);
					}
				},
				(selecting()
				? $selectLongPressDelay
				: $eventLongPressDelay) ?? $longPressDelay
			));
		}
	}

	function move(jsEvent) {
		if (interacting || jsEvent && jsEvent.pointerType === 'mouse' && distance() >= (selecting() ? $selectMinDistance : $eventDragMinDistance)) {
			interacting = true;
			unselect(jsEvent);
			set_store_value(_iClass, $_iClass = iClass, $_iClass);

			if (!$_iEvents[0]) {
				if (selecting()) {
					createIEventSelect();
				} else {
					createIEvent(jsEvent, resizing() ? $eventResizeStart : $eventDragStart);
				}
			}

			let dayEl = findDayEl();

			if (dayEl) {
				let newAllDay;
				({ allDay: newAllDay, date: newDate, resource: newResource } = getPayload(dayEl)(toY));

				if (newAllDay === allDay) {
					delta = createDuration((newDate - date) / 1000);
					set_store_value(_iEvents, $_iEvents[0].end = addDuration(cloneDate(event.end), delta), $_iEvents);

					if (resizing()) {
						// Resizing
						if ($_iEvents[0].end < minEnd) {
							set_store_value(_iEvents, $_iEvents[0].end = minEnd, $_iEvents);
						}
					} else if (selecting()) {
						// Selecting
						if ($_iEvents[0].end < event.end) {
							set_store_value(_iEvents, $_iEvents[0].start = subtractDuration($_iEvents[0].end, selectStep), $_iEvents);
							set_store_value(_iEvents, $_iEvents[0].end = event.end, $_iEvents);
						} else {
							set_store_value(_iEvents, $_iEvents[0].start = event.start, $_iEvents);
						}
					} else {
						// Dragging
						set_store_value(_iEvents, $_iEvents[0].start = addDuration(cloneDate(event.start), delta), $_iEvents);

						if (resource) {
							set_store_value(_iEvents, $_iEvents[0].resourceIds = event.resourceIds.filter(id => id !== resource.id), $_iEvents);
							$_iEvents[0].resourceIds.push(newResource.id);
						}
					}
				}
			}
		}

		if ($dragScroll) {
			let threshold = $slotHeight * 2;

			animate(() => {
				if (bodyEl) {
					if (toY < threshold) {
						window.scrollBy(0, max(-10, (toY - threshold) / 3));
					}

					if (toY < bodyRect.top + threshold) {
						bodyEl.scrollTop += max(-10, (toY - bodyRect.top - threshold) / 3);
					}

					if (toY > window.innerHeight - threshold) {
						window.scrollBy(0, min(10, (toY - window.innerHeight + threshold) / 3));
					}

					if (toY > bodyRect.bottom - threshold) {
						bodyEl.scrollTop += min(10, (toY - bodyRect.bottom + threshold) / 3);
					}
				}
			});
		}
	}

	function handleScroll() {
		if (complexAction()) {
			calcViewport();
			move();
		}
	}

	function handlePointerMove(jsEvent) {
		if (complexAction() && jsEvent.isPrimary) {
			toX = jsEvent.clientX;
			toY = jsEvent.clientY;
			move(jsEvent);
		}
	}

	function handlePointerUp(jsEvent) {
		if (selected && $unselectAuto && !($unselectCancel && jsEvent.target.closest($unselectCancel))) {
			unselect(jsEvent);
		}

		if (action && jsEvent.isPrimary) {
			if (interacting) {
				if (selecting()) {
					selected = true;

					if (is_function($selectFn)) {
						let { start, end } = toEventWithLocalDates($_iEvents[0]);

						$selectFn({
							start,
							end,
							startStr: toISOString($_iEvents[0].start),
							endStr: toISOString($_iEvents[0].end),
							allDay,
							jsEvent,
							view: toViewWithLocalDates($_view),
							resource
						});
					}
				} else {
					event.display = display;
					let callback = resizing() ? $eventResizeStop : $eventDragStop;

					if (is_function(callback)) {
						callback({
							event: toEventWithLocalDates(event),
							jsEvent,
							view: toViewWithLocalDates($_view)
						});
					}

					let oldEvent = cloneEvent(event);
					updateEvent(event, $_iEvents[0]);
					destroyIEvent();
					callback = resizing() ? $eventResize : $eventDrop;

					if (is_function(callback)) {
						let eventRef = event;
						let info;

						if (resizing()) {
							info = { endDelta: delta };
						} else {
							info = {
								delta,
								oldResource: resource !== newResource ? resource : undefined,
								newResource: resource !== newResource ? newResource : undefined
							};
						}

						callback(assign(info, {
							event: toEventWithLocalDates(event),
							oldEvent: toEventWithLocalDates(oldEvent),
							jsEvent,
							view: toViewWithLocalDates($_view),
							revert() {
								updateEvent(eventRef, oldEvent);
							}
						}));
					}
				}
			} else {
				if (clicking() || selecting()) {
					// Perform date click
					if (is_function($dateClick) && !noDateClick) {
						toX = jsEvent.clientX;
						toY = jsEvent.clientY;
						let dayEl = getElementWithPayload(toX, toY);

						if (dayEl) {
							let { allDay, date, resource } = getPayload(dayEl)(toY);

							$dateClick({
								allDay,
								date: toLocalDate(date),
								dateStr: toISOString(date),
								dayEl,
								jsEvent,
								view: toViewWithLocalDates($_view),
								resource
							});
						}
					}
				}
			}

			interacting = false;
			action = fromX = fromY = toX = toY = event = display = date = newDate = resource = newResource = delta = allDay = set_store_value(_iClass, $_iClass = minEnd = selectStep = undefined, $_iClass);
			bodyEl = clipEl = bodyRect = clipRect = undefined;

			if (timer) {
				clearTimeout(timer);
				$$invalidate(1, timer = undefined);
			}
		}

		noDateClick = false;
	}

	function findDayEl() {
		// Limit coordinates to viewport
		return getElementWithPayload(limit(toX, viewport[0], viewport[1]), limit(toY, viewport[2], viewport[3]));
	}

	function calcViewport() {
		bodyRect = rect(bodyEl);
		clipRect = rect(clipEl);

		viewport = [
			max(0, clipRect.left + ($_dayGrid ? 0 : 8)),
			min(
				document.documentElement.clientWidth,
				clipRect.right
			) - 2,
			max(
				0,
				bodyRect.top // top
			),
			min(document.documentElement.clientHeight, bodyRect.bottom) - 2
		]; // bottom
	}

	function createIEvent(jsEvent, callback) {
		if (is_function(callback)) {
			callback({
				event: toEventWithLocalDates(event),
				jsEvent,
				view: toViewWithLocalDates($_view)
			});
		}

		display = event.display;
		event.display = 'preview';
		set_store_value(_iEvents, $_iEvents[0] = cloneEvent(event), $_iEvents);
		event.display = 'ghost';
		_events.set($_events);
	}

	function createIEventSelect() {
		set_store_value(
			_iEvents,
			$_iEvents[0] = {
				id: '{select}',
				allDay: event.allDay,
				start: event.start,
				title: '',
				display: 'preview',
				extendedProps: {},
				backgroundColor: $selectBackgroundColor,
				resourceIds: event.resourceIds
			},
			$_iEvents
		);
	}

	function destroyIEvent() {
		set_store_value(_iEvents, $_iEvents[0] = null, $_iEvents);
	}

	function updateEvent(target, source) {
		target.start = source.start;
		target.end = source.end;
		target.resourceIds = source.resourceIds;
		_events.set($_events);
	}

	function distance() {
		return Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
	}

	function dragging() {
		return action === ACTION_DRAG;
	}

	function resizing() {
		return action === ACTION_RESIZE;
	}

	function clicking() {
		return action === ACTION_CLICK;
	}

	function selecting() {
		return action === ACTION_SELECT;
	}

	function complexAction() {
		return action && action < ACTION_CLICK;
	}

	function unselect(jsEvent) {
		if (selected) {
			selected = false;
			destroyIEvent();

			if (is_function($unselectFn)) {
				$unselectFn({
					jsEvent,
					view: toViewWithLocalDates($_view)
				});
			}
		}
	}

	function noClick() {
		noDateClick = true;
	}

	// Clear selection on view params change
	_view.subscribe(unselect);

	function handleTouchStart(jsEvent) {
		if (complexAction()) {
			let target = jsEvent.target;
			let stops = [];
			let stop = () => run_all(stops);
			stops.push(listen(target, 'touchmove', createPreventDefaultHandler(() => interacting)));
			stops.push(listen(target, 'touchend', stop));
			stops.push(listen(target, 'touchcancel', stop));
		}
	}

	function touchmove_handler(event) {
		bubble.call(this, $$self, event);
	}

	const contextmenu_handler = () => timer;

	return [
		handleScroll,
		timer,
		_iEvents,
		_iClass,
		_events,
		_view,
		_dayGrid,
		_draggable,
		dateClick,
		dragScroll,
		datesAboveResources,
		eventDragMinDistance,
		eventDragStart,
		eventDragStop,
		eventDrop,
		eventLongPressDelay,
		eventResizeStart,
		eventResizeStop,
		eventResize,
		longPressDelay,
		selectable,
		selectFn,
		selectBackgroundColor,
		selectLongPressDelay,
		selectMinDistance,
		slotDuration,
		slotHeight,
		unselectFn,
		unselectAuto,
		unselectCancel,
		view,
		handlePointerMove,
		handlePointerUp,
		complexAction,
		handleTouchStart,
		drag,
		select,
		unselect,
		noClick,
		touchmove_handler,
		contextmenu_handler
	];
}

class Action extends SvelteComponent {
	constructor(options) {
		super();

		init(
			this,
			options,
			instance$3,
			create_fragment$3,
			safe_not_equal,
			{
				drag: 35,
				select: 36,
				handleScroll: 0,
				unselect: 37,
				noClick: 38
			},
			null,
			[-1, -1, -1, -1]
		);
	}

	get drag() {
		return this.$$.ctx[35];
	}

	get select() {
		return this.$$.ctx[36];
	}

	get handleScroll() {
		return this.$$.ctx[0];
	}

	get unselect() {
		return this.$$.ctx[37];
	}

	get noClick() {
		return this.$$.ctx[38];
	}
}

/* packages/interaction/src/Pointer.svelte generated by Svelte v4.2.2 */

function create_fragment$2(ctx) {
	let mounted;
	let dispose;

	return {
		c: noop,
		m(target, anchor) {
			if (!mounted) {
				dispose = [
					listen(window, "pointermove", /*handlePointerMove*/ ctx[5]),
					listen(window, "scroll", /*handleScroll*/ ctx[0])
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			mounted = false;
			run_all(dispose);
		}
	};
}

function validEvent(jsEvent) {
	return jsEvent.isPrimary && jsEvent.pointerType === 'mouse';
}

function instance$2($$self, $$props, $$invalidate) {
	let $_iEvents;
	let $slotDuration;
	let $slotHeight;
	let $_slotTimeLimits;
	let { _iEvents, _events, _viewDates, _slotTimeLimits, slotDuration, slotHeight, hiddenDays, _view, datesAboveResources, theme } = getContext('state');
	component_subscribe($$self, _iEvents, value => $$invalidate(9, $_iEvents = value));
	component_subscribe($$self, _slotTimeLimits, value => $$invalidate(18, $_slotTimeLimits = value));
	component_subscribe($$self, slotDuration, value => $$invalidate(16, $slotDuration = value));
	component_subscribe($$self, slotHeight, value => $$invalidate(17, $slotHeight = value));
	let y;
	let colDate;
	let colEl;
	let colRect;
	let resource;
	let date;

	function enterTimeGrid(date, el, jsEvent, resourceObj) {
		if (validEvent(jsEvent)) {
			colDate = date;
			colEl = el;
			colRect = rect(colEl);
			y = jsEvent.clientY;
			resource = resourceObj;
		}
	}

	function enterDayGrid(date, jsEvent) {
		if (validEvent(jsEvent)) {
			colDate = date;
			colEl = null;
			y = resource = undefined;
		}
	}

	function leave(jsEvent) {
		if (validEvent(jsEvent)) {
			removePointerEvent();
		}
	}

	function move() {
		if (!colDate) {
			return;
		}

		if (colEl) {
			// timeGrid
			let ry = y - colRect.top;

			date = addDuration(addDuration(cloneDate(colDate), $_slotTimeLimits.min), $slotDuration, floor(ry / $slotHeight));
		} else {
			// dayGrid
			date = colDate;
		}

		if (!$_iEvents[1]) {
			createPointerEvent();
		}

		set_store_value(_iEvents, $_iEvents[1].start = date, $_iEvents);
		set_store_value(_iEvents, $_iEvents[1].end = addDuration(cloneDate(date), $slotDuration), $_iEvents);
		set_store_value(_iEvents, $_iEvents[1].resourceIds = resource ? [resource.id] : [], $_iEvents);
	}

	function handleScroll() {
		if (colEl) {
			colRect = rect(colEl);
			move();
		}
	}

	function handlePointerMove(jsEvent) {
		if (validEvent(jsEvent)) {
			y = jsEvent.clientY;
			move();
		}
	}

	function createPointerEvent() {
		set_store_value(
			_iEvents,
			$_iEvents[1] = {
				id: '{pointer}',
				title: '',
				display: 'pointer',
				extendedProps: {},
				backgroundColor: 'transparent'
			},
			$_iEvents
		);
	}

	function removePointerEvent() {
		colDate = colEl = set_store_value(_iEvents, $_iEvents[1] = null, $_iEvents);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$_iEvents*/ 512) {
			if ($_iEvents[0]) {
				removePointerEvent();
			}
		}
	};

	return [
		handleScroll,
		_iEvents,
		_slotTimeLimits,
		slotDuration,
		slotHeight,
		handlePointerMove,
		enterTimeGrid,
		enterDayGrid,
		leave,
		$_iEvents
	];
}

class Pointer extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			enterTimeGrid: 6,
			enterDayGrid: 7,
			leave: 8,
			handleScroll: 0
		});
	}

	get enterTimeGrid() {
		return this.$$.ctx[6];
	}

	get enterDayGrid() {
		return this.$$.ctx[7];
	}

	get leave() {
		return this.$$.ctx[8];
	}

	get handleScroll() {
		return this.$$.ctx[0];
	}
}

/* packages/interaction/src/Resizer.svelte generated by Svelte v4.2.2 */

function create_if_block$1(ctx) {
	let div;
	let div_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			attr(div, "class", div_class_value = /*$theme*/ ctx[1].resizer);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (!mounted) {
				dispose = listen(div, "pointerdown", /*pointerdown_handler*/ ctx[8]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*$theme*/ 2 && div_class_value !== (div_class_value = /*$theme*/ ctx[1].resizer)) {
				attr(div, "class", div_class_value);
			}
		},
		d(detaching) {
			if (detaching) {
				detach(div);
			}

			mounted = false;
			dispose();
		}
	};
}

function create_fragment$1(ctx) {
	let if_block_anchor;
	let if_block = /*resizable*/ ctx[0] && create_if_block$1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*resizable*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let $editable;
	let $eventDurationEditable;
	let $theme;
	let { event } = $$props;
	let { theme, eventDurationEditable, editable } = getContext('state');
	component_subscribe($$self, theme, value => $$invalidate(1, $theme = value));
	component_subscribe($$self, eventDurationEditable, value => $$invalidate(7, $eventDurationEditable = value));
	component_subscribe($$self, editable, value => $$invalidate(6, $editable = value));
	let resizable;

	function pointerdown_handler(event) {
		bubble.call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('event' in $$props) $$invalidate(5, event = $$props.event);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*event, $eventDurationEditable, $editable*/ 224) {
			$$invalidate(0, resizable = !bgEvent(event.display) && !helperEvent(event.display) && ((event.durationEditable ?? $eventDurationEditable) || (event.editable ?? $editable)));
		}
	};

	return [
		resizable,
		$theme,
		theme,
		eventDurationEditable,
		editable,
		event,
		$editable,
		$eventDurationEditable,
		pointerdown_handler
	];
}

class Resizer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { event: 5 });
	}
}

/* packages/interaction/src/Auxiliary.svelte generated by Svelte v4.2.2 */

function create_if_block(ctx) {
	let pointer_1;
	let current;
	let pointer_1_props = {};
	pointer_1 = new Pointer({ props: pointer_1_props });
	/*pointer_1_binding*/ ctx[16](pointer_1);

	return {
		c() {
			create_component(pointer_1.$$.fragment);
		},
		m(target, anchor) {
			mount_component(pointer_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const pointer_1_changes = {};
			pointer_1.$set(pointer_1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(pointer_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(pointer_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			/*pointer_1_binding*/ ctx[16](null);
			destroy_component(pointer_1, detaching);
		}
	};
}

function create_fragment(ctx) {
	let action;
	let t;
	let if_block_anchor;
	let current;
	let action_props = {};
	action = new Action({ props: action_props });
	/*action_binding*/ ctx[15](action);
	let if_block = /*$pointer*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			create_component(action.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			mount_component(action, target, anchor);
			insert(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const action_changes = {};
			action.$set(action_changes);

			if (/*$pointer*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$pointer*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(action.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(action.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(t);
				detach(if_block_anchor);
			}

			/*action_binding*/ ctx[15](null);
			destroy_component(action, detaching);
			if (if_block) if_block.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $_interaction;
	let $_bodyEl;
	let $theme;
	let $_draggable;
	let $_iClasses;
	let $editable;
	let $eventStartEditable;
	let $pointer;
	let { theme, editable, eventStartEditable, eventDurationEditable, pointer, _bodyEl, _interaction, _iClasses, _draggable } = getContext('state');
	component_subscribe($$self, theme, value => $$invalidate(11, $theme = value));
	component_subscribe($$self, editable, value => $$invalidate(13, $editable = value));
	component_subscribe($$self, eventStartEditable, value => $$invalidate(14, $eventStartEditable = value));
	component_subscribe($$self, pointer, value => $$invalidate(1, $pointer = value));
	component_subscribe($$self, _bodyEl, value => $$invalidate(10, $_bodyEl = value));
	component_subscribe($$self, _interaction, value => $$invalidate(0, $_interaction = value));
	component_subscribe($$self, _iClasses, value => $$invalidate(17, $_iClasses = value));
	component_subscribe($$self, _draggable, value => $$invalidate(12, $_draggable = value));
	set_store_value(_interaction, $_interaction.resizer = Resizer, $_interaction);

	function bodyScrollHandler() {
		for (let component of Object.values($_interaction)) {
			component?.handleScroll?.();
		}
	}

	function action_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$_interaction.action = $$value;
			_interaction.set($_interaction);
		});
	}

	function pointer_1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$_interaction.pointer = $$value;
			_interaction.set($_interaction);
		});
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$eventStartEditable, $editable*/ 24576) {
			set_store_value(_draggable, $_draggable = event => (event.startEditable ?? $eventStartEditable) || (event.editable ?? $editable), $_draggable);
		}

		if ($$self.$$.dirty & /*$theme, $_draggable*/ 6144) {
			set_store_value(
				_iClasses,
				$_iClasses = (className, event) => {
					let { display } = event;

					return helperEvent(display)
					? [$theme[display]]
					: !bgEvent(display) && $_draggable(event)
						? [$theme.draggable]
						: [];
				},
				$_iClasses
			);
		}

		if ($$self.$$.dirty & /*$_bodyEl*/ 1024) {
			if ($_bodyEl) {
				listen($_bodyEl, 'scroll', bodyScrollHandler);
			}
		}
	};

	return [
		$_interaction,
		$pointer,
		theme,
		editable,
		eventStartEditable,
		pointer,
		_bodyEl,
		_interaction,
		_iClasses,
		_draggable,
		$_bodyEl,
		$theme,
		$_draggable,
		$editable,
		$eventStartEditable,
		action_binding,
		pointer_1_binding
	];
}

class Auxiliary extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

var index = {
	createOptions(options) {
		options.dateClick = undefined;
		options.dragScroll = true;
		options.editable = false;
		options.eventDragMinDistance = 5;
		options.eventDragStart = undefined;
		options.eventDragStop = undefined;
		options.eventDrop = undefined;
		options.eventDurationEditable = true;
		options.eventLongPressDelay = undefined;
		options.eventResizeStart = undefined;
		options.eventResizeStop = undefined;
		options.eventResize = undefined;
		options.eventStartEditable = true;
		options.longPressDelay = 1000;
		options.pointer = false;
		options.select = undefined;
		options.selectBackgroundColor = undefined;  // ec option
		options.selectLongPressDelay = undefined;
		options.selectMinDistance = 5;
		options.unselect = undefined;
		options.unselectAuto = true;
		options.unselectCancel = '';
		options.theme.draggable = 'ec-draggable';
		options.theme.ghost = 'ec-ghost';
		options.theme.preview = 'ec-preview';
		options.theme.pointer = 'ec-pointer';
		options.theme.resizer = 'ec-resizer';
		options.theme.dragging = 'ec-dragging';
		options.theme.resizingY = 'ec-resizing-y';
		options.theme.resizingX = 'ec-resizing-x';
		options.theme.selecting = 'ec-selecting';
	},

	createStores(state) {
		state._draggable = writable(noop);
		state._auxiliary.update($_auxiliary => [...$_auxiliary, Auxiliary]);
	}
};

export { index as default };
