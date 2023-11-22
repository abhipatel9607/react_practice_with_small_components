/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/TravelList.css";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Books", quantity: 12, packed: false },
	{ id: 3, description: "Charger", quantity: 1, packed: false },
];

const TravelList = () => {
	const [items, setItem] = useState(initialItems);

	function handleAddItems(newItem) {
		setItem((items) => [...items, newItem]);
	}
	function handleDeleteItem(id) {
		setItem((items) => items.filter((item) => item.id != id));
	}
	function handleToggleItem(id) {
		setItem((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleClearList() {
		const confirmed = window.confirm(
			"Are you sure you want to Delete all items"
		);
		if (confirmed) setItem([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
};

// #############################################################################################
const Logo = () => {
	return <h1 className="heading-primary">Far Away</h1>;
};
// #############################################################################################
const Form = ({ onAddItems }) => {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = { id: Date.now(), description, quantity, packed: false };
		onAddItems(newItem);

		setDescription("");
		setQuantity(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do u need for your Trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="Item..."
			/>
			<button>Add</button>
		</form>
	);
};
// #############################################################################################

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
	const [sortBy, setSortBy] = useState("input");
	let sortedItem;
	if (sortBy === "input") sortedItem = items;
	if (sortBy === "description")
		sortedItem = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	if (sortBy === "packed")
		sortedItem = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedItem.map((item) => {
					return (
						<Item
							onDeleteItem={onDeleteItem}
							onToggleItem={onToggleItem}
							key={item.id}
							item={item}
						/>
					);
				})}
			</ul>
			<div className="actions">
				<select
					name=""
					id=""
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="input">SORT BY INPUT ORDER</option>
					<option value="description">SORT BY DESCRIPTION</option>
					<option value="packed">SORT BY PACKED STATUS</option>
				</select>
				<button onClick={onClearList}>Clear List</button>
			</div>
		</div>
	);
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
	return (
		<li>
			<input
				value={item.packed}
				type="checkbox"
				onChange={() => {
					onToggleItem(item.id);
				}}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)} style={{ color: "#fff" }}>
				X
			</button>
		</li>
	);
};
// #############################################################################################

const Stats = ({ items }) => {
	if (items.length === 0)
		return (
			<p className="footer">
				<em>Start adding some items to your packing list..</em>
			</p>
		);

	const numItems = items.length;
	const packedItemp = items.filter((item) => item.packed).length;
	const percentage = Math.round((packedItemp * 100) / numItems);
	return (
		<footer>
			<em>
				{percentage == 100
					? "You got everything! Ready to go"
					: `You have ${numItems} items on your list, and You already packed${" "}
				${packedItemp} (${percentage}%)`}
			</em>
		</footer>
	);
};

export default TravelList;
