import Map "mo:core/Map";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type Tool = {
    name : Text;
    description : Text;
    category : Text;
    rating : Nat8;
    verified : Bool;
    tags : [Text];
    deal : Text;
    website : Text;
  };

  module Tool {
    public func compare(tool1 : Tool, tool2 : Tool) : Order.Order {
      Text.compare(tool1.name, tool2.name);
    };
  };

  let tools = Map.empty<Text, Tool>();

  public shared ({ caller }) func addTool(
    name : Text,
    description : Text,
    category : Text,
    rating : Nat8,
    verified : Bool,
    tags : [Text],
    deal : Text,
    website : Text,
  ) : async () {
    if (name == "" or description == "" or category == "") {
      Runtime.trap("Name, description, and category must not be empty");
    };
    if (rating > 5) { Runtime.trap("Rating must be between 0 and 5") };
    if (website == "") { Runtime.trap("Website must not be empty") };

    let newTool : Tool = {
      name;
      description;
      category;
      rating;
      verified;
      tags;
      deal;
      website;
    };

    tools.add(name, newTool);
  };

  public query ({ caller }) func searchTools(searchTerm : Text) : async [Tool] {
    let lowerSearchTerm = searchTerm.toLower();
    tools.values().toArray().filter(
      func(tool) {
        tool.name.toLower().contains(#text lowerSearchTerm) or
        tool.description.toLower().contains(#text lowerSearchTerm)
      }
    ).sort();
  };

  public query ({ caller }) func filterByCategory(category : Text) : async [Tool] {
    tools.values().toArray().filter(
      func(tool) { tool.category == category }
    );
  };

  public query ({ caller }) func getAllTools() : async [Tool] {
    tools.values().toArray();
  };

  public query ({ caller }) func getToolByName(name : Text) : async Tool {
    switch (tools.get(name)) {
      case (?tool) { tool };
      case (null) { Runtime.trap("Tool not found") };
    };
  };

  public query ({ caller }) func getCategories() : async [Text] {
    let categories = Map.empty<Text, Bool>();

    for ((_, tool) in tools.entries()) {
      if (not categories.containsKey(tool.category)) {
        categories.add(tool.category, true);
      };
    };

    categories.keys().toArray();
  };
};
